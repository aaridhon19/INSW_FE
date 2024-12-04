import './Form.css'

export default function FormEntitas(dataEntitas) {
    // console.log(dataEntitas);
    
    return (
        <div className="Form-entitas">
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Jenis Pemberitahuan<span className='required'>*</span></strong>
                    <input className='Form-control-info' type="text" value={dataEntitas.dataEntitas?.ur_entitas || ""} placeholder='Jenis Pemberitahuan' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-title">
                <p>{dataEntitas.dataEntitas?.ur_entitas || ""}</p>
              </div>
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Jenis Identitas<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.ur_jenis_identitas || ""} placeholder='Jenis Identitas' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>NIB<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.nib || ""} placeholder='NIB' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>No Identitas<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.nomor_identitas || ""} placeholder='No Identitas' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>No Identitas (16 Digit)</strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.nomor_identitas || ""} placeholder='No Identitas (16 Digit)' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Nama Perusahaan<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.nama_identitas || ""} placeholder='Nama Perusahaan' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-two">
                    <strong className='Form-label'>Provinsi<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.provinsi_identitas || ""} placeholder='Provinsi' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Kota / Kabupaten<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.kota_identitas || ""} placeholder='Kota / Kabupaten' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Kecamatan<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.kecamatan || ""} placeholder='Kecamatan' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Kode Pos<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.kode_pos || ""} placeholder='Kode Pos' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>RT / RW<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.rt_rw || ""} placeholder='RT / RW' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-two">
                    <strong className='Form-label'>Telephone<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.tlp_identitas || ""} placeholder='Telephone' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Email<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.email_identitas || ""} placeholder='Email' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Status<span className='required'>*</span></strong>
                    <input className='Form-control' type="text" value={dataEntitas.dataEntitas?.status || ""} placeholder='Status' minLength={1} maxLength={10} />
                </div>
            </div>
        </div>
    )
}