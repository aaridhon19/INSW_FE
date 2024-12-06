import './btn.css'

export const PungutanBtn = ({ onKelengkapanClick, onSimpanClick }) => {
    return (
        <div className='Btn-pungutan'>
            <button className="Btn-one">Kelengkapan Data</button>
            <button className="Btn-two">Simpan</button>
        </div>
    );
}