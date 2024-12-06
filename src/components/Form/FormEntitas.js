import './Form.css'
import { FormInput } from './FormInput'

export default function FormEntitas({ dataEntitas }) {

    return (
        <div className="Form-entitas">
            <div className="Form-section">
                <FormInput
                    label={"Jenis Pemberitahuan"}
                    required={true}
                    value={dataEntitas?.ur_entitas || ""}
                    placeholder={"Jenis Pemberitahuan"}
                />
            </div>
            <div className="Form-title">
                <p>{dataEntitas?.ur_entitas || ""}</p>
            </div>
            <div className="Form-section">
                <FormInput 
                    label={"Jenis Identitas"}
                    required={true}
                    value={dataEntitas?.ur_jenis_identitas || ""}
                    placeholder={"Jenis Identitas"}
                />
                <FormInput 
                    label={"NIB"}
                    required={true}
                    value={dataEntitas?.nib || ""}
                    placeholder={"NIB"}
                />
                <FormInput
                    label={"No Identitas"}
                    required={true}
                    value={dataEntitas?.nomor_identitas || ""}
                    placeholder={"No Identitas"}
                />
            </div>
            <div className="Form-section">
                <FormInput
                    label={"No Identitas (16 Digit)"}
                    required={false}
                    value={dataEntitas?.nomor_identitas || ""}
                    placeholder={"No Identitas (16 Digit)"}
                />
                <FormInput
                    label={"Nama Perusahaan"}
                    required={true}
                    value={dataEntitas?.nama_identitas || ""}
                    placeholder={"Nama Perusahaan"}
                />
            </div>
            <div className="Form-section">
                <FormInput 
                    label={"Provinsi"}
                    required={true}
                    value={dataEntitas?.provinsi_identitas || ""}
                    placeholder={"Provinsi"}
                />
                <FormInput
                    label={"Kota / Kabupaten"}
                    required={true}
                    value={dataEntitas?.kota_identitas || ""}
                    placeholder={"Kota / Kabupaten"}
                />
                <FormInput
                    label={"Kecamatan"}
                    required={true}
                    value={dataEntitas?.kecamatan || ""}
                    placeholder={"Kecamatan"}
                />
                <FormInput 
                    label={"Kode Pos"}
                    required={true}
                    value={dataEntitas?.kode_pos || ""}
                    placeholder={"Kode Pos"}
                />
                <FormInput
                    label={"RT / RW"}
                    required={true}
                    value={dataEntitas?.rt_rw || ""}
                    placeholder={"RT / RW"}
                />
            </div>
            <div className="Form-section">
                <FormInput
                    label={"Telephone"}
                    required={true}
                    value={dataEntitas?.tlp_identitas || ""}
                    placeholder={"Telephone"}
                />
                <FormInput 
                    label={"Email"}
                    required={true}
                    value={dataEntitas?.email_identitas || ""}
                    placeholder={"Email"}
                />
                <FormInput
                    label={"Status"}
                    required={true}
                    value={dataEntitas?.status || ""}
                    placeholder={"Status"}
                />
            </div>
        </div>
    )
}