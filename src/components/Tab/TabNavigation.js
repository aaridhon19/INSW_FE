export const TabNavigation = ({ onPrevious, onNext }) => {
    return (
        <div className="Tab-buttons">
            <button className="Tab-btn" disabled={!onPrevious} onClick={onPrevious}>Sebelumnya</button>
            <button className="Tab-btn" disabled={!onNext} onClick={onNext}>Selanjutnya</button>
        </div>
    );
}