import { useEffect, useState } from "react";
import "./Form.css";
import { fetchDataUtama } from "../../services/api";
import { FormInput } from "./FormInput";

export default function FormUtama({ dataUtama, onNoPengajuanChangeForm }) {
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        if (dataUtama?.nomor_pengajuan) {
            setInputValue(dataUtama.nomor_pengajuan);
        }
    }, [dataUtama]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setIsValid(null);
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = inputValue.trim();
            setIsValid(null);

            if (!value) {
                onNoPengajuanChangeForm(null);
                return;
            }

            setIsLoading(true);
            setTimeout(async () => {
                try {
                    const response = await fetchDataUtama(value);
                    // console.log("Response data:", response?.data);
                    

                    if (response?.data.nomor_pengajuan === value) {
                        setIsValid(true);
                        onNoPengajuanChangeForm(value);
                    } else {
                        setIsValid(false);
                        onNoPengajuanChangeForm(null);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setIsValid(false);
                    onNoPengajuanChangeForm(null);
                } finally {
                    setIsLoading(false);
                }
            }, 1000);
        }
    };

    return (
        <div className="Form-utama">
            <div className="Form-section">
                <FormInput
                    label={"Nomor Pengajuan"}
                    required={false}
                    value={inputValue}
                    placeholder={"Nomor Pengajuan"}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                >
                    {isLoading && <p className="Form-loading">Validating...</p>}
                    {isValid === false && (
                        <div className="Form-invalid">
                            <p>Nomor pengajuan tidak ditemukan</p>
                        </div>
                    )}
                </FormInput>
                <FormInput
                    label={"Tanggal Pengajuan"}
                    required={false}
                    value={dataUtama?.tanggal_pengajuan || ""}
                    placeholder={"Tanggal Pengajuan"}
                />
                <FormInput
                    label={"Nomor Pendaftaran"}
                    required={false}
                    value={dataUtama?.nomor_pendaftaran || ""}
                    placeholder={"Nomor Pendaftaran"}
                />
                <FormInput
                    label={"Tanggal Pendaftaran"}
                    required={false}
                    value={dataUtama?.tanggal_pendaftaran || ""}
                    placeholder={"Tanggal Pendaftaran"}
                />
            </div>
            <div className="Form-section">
                <FormInput 
                    label={"Kantor Pabean"}
                    required={true}
                    value={dataUtama?.ur_pabean_asal || ""}
                    placeholder={"Kantor Pabean"}
                />
                <FormInput
                    label={"SKEP Fasilitas"}
                    required={false}
                    value={dataUtama?.kd_skep_fasilitas || ""}
                    placeholder={"SKEP Fasilitas"}
                />
                <FormInput
                    label={"Jenis PIB"}
                    required={true}
                    value={dataUtama?.ur_jenis_pib || ""}
                    placeholder={"Jenis PIB"}
                />
            </div>
            <div className="Form-section">
                <FormInput
                    label={"Jenis Impor"}
                    required={true}
                    value={dataUtama?.ur_jenis_impor || ""}
                    placeholder={"Jenis Impor"}
                />
                <FormInput
                    label={"Cara Pembayaran"}
                    required={true}
                    value={dataUtama?.ur_cara_bayar || ""}
                    placeholder={"Cara Pembayaran"}
                />
                <FormInput
                    label={"Transaksi"}
                    required={true}
                    value={dataUtama?.ur_transaksi_impor || ""}
                    placeholder={"Transaksi"}
                />
            </div>
        </div>
    )
}