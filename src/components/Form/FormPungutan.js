import './Form.css'

export default function FormPungutan(dataPungutan) {
    console.log(dataPungutan);
    
    return (
        <div className="Form-pungutan">
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Incoterms<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.ur_incoterm || ""} placeholder='Incoterms' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Valuta<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.ur_valuta || ""} placeholder='Valuta' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Kurs</strong>
                    <div className="Form-operator-refresh">
                        <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.nilai_kurs || ""} placeholder='Kurs' minLength={1} maxLength={10} />
                        <div className='Form-refresh'>
                            <div className='Form-refresh-image'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Nilai<span className="required">*</span></strong>
                    <div className="Form-operator">
                        <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.nilai_incoterm || ""} placeholder='Nilai' minLength={1} maxLength={10} />
                        <span className='Form-operator-real'>+</span>
                    </div>
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Biaya Tambahan</strong>
                    <div className="Form-operator">
                        <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.biaya_tambahan || ""} placeholder='Biaya Tambahan' minLength={1} maxLength={10} />
                        <span className='Form-operator-real'>-</span>
                    </div>
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Biaya Pengurang</strong>
                    <div className="Form-operator">
                        <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.biaya_pengurang || ""} placeholder='Biaya Pengurang' minLength={1} maxLength={10} />
                        <span className='Form-operator-real'>+</span>
                    </div>
                </div>
                <div className="Form-section-four">
                    <strong className='Form-label'>Voluntary Declaration</strong>
                    <div className="Form-operator">
                        <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.tarif_vd || ""} placeholder='Voluntary Declaration' minLength={1} maxLength={10} />
                        <span className='Form-operator-real'>=</span>
                    </div>
                </div>
                <div className="Form-section-five">
                    <strong className='Form-label'>Nilai FOB</strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.fob || ""} placeholder='Nilai FOB' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Asuransi Bayar di</strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.ur_asuransi || ""} placeholder='Asuransi Bayar di' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Asuransi</strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.nilai_asuransi || ""} placeholder='Asuransi' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Freigth</strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.freight || ""} placeholder='Freigth' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>CIF</strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.nilai_pabean || ""} placeholder='CIF' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>CIF Rp</strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.nilai_pabean_idr || ""} placeholder='CIF' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Brutto</strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.berat_kotor || ""} placeholder='Brutto' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-four">
                    <strong className='Form-label'>Netto</strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.berat_bersih || ""} placeholder='Netto' minLength={1} maxLength={10} />
                </div>
                <div className="Form-section-five">
                    <strong className='Form-label'>Flag Kontainer<span className="required">*</span></strong>
                    <input className='Form-control' type="text" value={dataPungutan.dataPungutan?.ur_flag_curah || ""} placeholder='Flag Kontainer' minLength={1} maxLength={10} />
                </div>
            </div>
            <div className='Form-btn-pungutan'>
                <button className="Form-btn-one">Kelengkapan Data</button>
                <button className="Form-btn-two">Simpan</button>
            </div>
        </div>
    )
}
