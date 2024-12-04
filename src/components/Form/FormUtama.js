import './Form.css'

export default function FormUtama(dataUtama) {
    // console.log(dataUtama);
    
    return (
        <div className="Form-utama">
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Nomor Pengajuan</strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.nomor_pengajuan || ""} placeholder='Nomor Pengajuan' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Tanggal Pengajuan</strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.tanggal_pengajuan || ""}  placeholder='Tanggal Pengajuan' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Nomor Pendaftaran</strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.nomor_pendaftaran || ""} placeholder='Nomor Pendaftaran' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-four">
                    <strong className='Form-label'>Tanggal Pendaftaran</strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.tanggal_pendaftaran || ""} placeholder='Tanggal Pendaftaran' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Kantor Pabean<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.ur_pabean_asal || ""} placeholder='Kantor Pabean' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>SKEP Fasilitas</strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.kd_skep_fasilitas || ""} placeholder='SKEP Fasilitas' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Jenis PIB<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.ur_jenis_pib || ""} placeholder='Jenis PIB' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-two">
                    <strong className='Form-label'>Jenis Impor<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.ur_jenis_impor || ""} placeholder='Jenis Impor' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Cara Pembayaran<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.ur_cara_bayar || ""} placeholder='Cara Pembayaran' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Transaksi<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataUtama.dataUtama?.ur_transaksi_impor || ""} placeholder='Transaksi' minLength={1} maxLength={10} />
                </div>
            </div>
        </div>
    )
}