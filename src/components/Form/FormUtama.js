import { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";

export default function FormUtama({ dataUtama, onNoPengajuanChangeForm }) {
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        const savedInput = localStorage.getItem("nomorPengajuan");
        if (savedInput) setInputValue(savedInput);
    }, []);

    useEffect(() => {
        localStorage.setItem("nomorPengajuan", inputValue);
    }, [inputValue]);

    const handleChange = async (e) => {
        const value = e.target.value.trim();
        setInputValue(value);
        setIsValid(null);

        if (!value) {
            onNoPengajuanChangeForm(null);
            localStorage.removeItem("nomorPengajuan");
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.get(
                `https://api-hub.ilcs.co.id/test/v2/dataUtama?nomor_pengajuan=${value}`
            );
            const responseData = response.data.data;

            if (responseData?.nomor_pengajuan === value) {
                setIsValid(true);
                onNoPengajuanChangeForm(value);
            } else if(responseData?.nomor_pengajuan !== value){
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
    };

    return (
        <div className="Form-utama">
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className="Form-label">Nomor Pengajuan</strong>
                    <input
                        className="Form-control"
                        type="text"
                        value={inputValue}
                        placeholder="Nomor Pengajuan"
                        onChange={handleChange}
                        disabled={isValid}
                    />
                    {isLoading && <p className="Form-loading">Validating...</p>}
                    {isValid === false && (
                        <div className="Form-invalid">
                            <p>Nomor pengajuan tidak ditemukan</p>
                        </div>
                    )}
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Tanggal Pengajuan</strong>
                    <input className='Form-control' type="text" value={dataUtama?.tanggal_pengajuan != null || dataUtama == null ? dataUtama?.tanggal_pengajuan : ""} placeholder='Tanggal Pengajuan' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Nomor Pendaftaran</strong>
                    <input className='Form-control' type="text" value={dataUtama?.nomor_pendaftaran || ""} placeholder='Nomor Pendaftaran' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-four">
                    <strong className='Form-label'>Tanggal Pendaftaran</strong>
                    <input className='Form-control' type="text" value={dataUtama?.tanggal_pendaftaran || ""} placeholder='Tanggal Pendaftaran' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Kantor Pabean<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama?.ur_pabean_asal || ""} placeholder='Kantor Pabean' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>SKEP Fasilitas</strong>
                    <input className='Form-control' type="text" value={dataUtama?.kd_skep_fasilitas || ""} placeholder='SKEP Fasilitas' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Jenis PIB<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama?.ur_jenis_pib || ""} placeholder='Jenis PIB' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-two">
                    <strong className='Form-label'>Jenis Impor<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama?.ur_jenis_impor || ""} placeholder='Jenis Impor' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Cara Pembayaran<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama?.ur_cara_bayar || ""} placeholder='Cara Pembayaran' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Transaksi<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama?.ur_transaksi_impor || ""} placeholder='Transaksi' minLength={1} maxLength={10} />
                </div>
            </div>
        </div>
    )
}