import './btn.css'

export const RefreshBtn = ({ onClick }) => {
    return (
        <div className='Btn-refresh'>
            <div className='Btn-refresh-image' onClick={onClick} />
        </div>
    );
}