
import { PungutanBtn } from '../Button/pungutanBtn';
import { RefreshBtn } from '../Button/refreshBtn';
import './Form.css'
import { FormInput } from './FormInput';

export default function FormPungutan({ dataPungutan, onRefresh }) {
    console.log(dataPungutan);

    const handleRefresh = () => {
        if (onRefresh) {
            onRefresh();
        }
    }

    const handleSimpan = () => {
        console.log('Simpan');
    }

    const handleKelengkapan = () => {
        console.log('Kelengkapan Data');
    }

    return (
        <div className="Form-pungutan">
            <div className="Form-section">
                <FormInput
                    label={"Incoterms"}
                    required={true}
                    value={dataPungutan?.ur_incoterm || ""}
                    placeholder={"Incoterms"}
                />
                <FormInput
                    label={"Valuta"}
                    required={true}
                    value={dataPungutan?.ur_valuta || ""}
                    placeholder={"Valuta"}
                />
                <div className="Form-section-three">
                    <strong className='Form-label'>Kurs</strong>
                    <div className="Form-operator-refresh">
                        <input className='Form-control' type="text" value={dataPungutan?.nilai_kurs || ""} placeholder='Kurs' minLength={1} maxLength={10} />
                        <RefreshBtn onClick={handleRefresh} />
                    </div>
                </div>
            </div>
            <div className="Form-section">
                <div className="Form-section-one">
                    <strong className='Form-label'>Nilai<span className="required">*</span></strong>
                    <div className="Form-operator">
                        <FormInput
                            value={dataPungutan?.nilai_incoterm || ""}
                            placeholder={"Nilai"}
                        />
                        <span className='Form-operator-real'>+</span>
                    </div>
                </div>
                <div className="Form-section-two">
                    <strong className='Form-label'>Biaya Tambahan</strong>
                    <div className="Form-operator">
                        <FormInput
                            value={dataPungutan?.biaya_tambahan || ""}
                            placeholder={"Biaya Tambahan"}
                        />
                        <span className='Form-operator-real'>-</span>
                    </div>
                </div>
                <div className="Form-section-three">
                    <strong className='Form-label'>Biaya Pengurang</strong>
                    <div className="Form-operator">
                        <FormInput
                            value={dataPungutan?.biaya_pengurang || ""}
                            placeholder={"Biaya Pengurang"}
                        />
                        <span className='Form-operator-real'>+</span>
                    </div>
                </div>
                <div className="Form-section-four">
                    <strong className='Form-label'>Voluntary Declaration</strong>
                    <div className="Form-operator">
                        <FormInput
                            value={dataPungutan?.tarif_vd || ""}
                            placeholder={"Voluntary Declaration"}
                        />
                        <span className='Form-operator-real'>=</span>
                    </div>
                </div>
                <FormInput
                    label={"Nilai FOB"}
                    required={false}
                    value={dataPungutan?.fob || ""}
                    placeholder={"Nilai FOB"}
                />
            </div>
            <div className="Form-section">
                <FormInput
                    label={"Asuransi Bayar di"}
                    required={false}
                    value={dataPungutan?.ur_asuransi || ""}
                    placeholder={"Asuransi Bayar di"}
                />
                <FormInput
                    label={"Asuransi"}
                    required={false}
                    value={dataPungutan?.nilai_asuransi || ""}
                    placeholder={"Asuransi"}
                />
                <FormInput
                    label={"Freight"}
                    required={false}
                    value={dataPungutan?.freight || ""}
                    placeholder={"Freight"}
                />
            </div>
            <div className="Form-section">
                <FormInput
                    label={"CIF"}
                    required={false}
                    value={dataPungutan?.nilai_pabean || ""}
                    placeholder={"CIF"}
                />
                <FormInput
                    label={"CIF Rp"}
                    required={false}
                    value={dataPungutan?.nilai_pabean_idr || ""}
                    placeholder={"CIF Rp"}
                />
                <FormInput
                    label={"Brutto"}
                    required={false}
                    value={dataPungutan?.berat_kotor || ""}
                    placeholder={"Brutto"}
                />
                <FormInput
                    label={"Netto"}
                    required={false}
                    value={dataPungutan?.berat_bersih || ""}
                    placeholder={"Netto"}
                />
                <FormInput
                    label={"Flag Kontainer"}
                    required={true}
                    value={dataPungutan?.ur_flag_curah || ""}
                    placeholder={"Flag Kontainer"}
                />
            </div>
            <PungutanBtn onKelengkapanClick={handleKelengkapan} onSimpanClick={handleSimpan} />
        </div>
    )
}
