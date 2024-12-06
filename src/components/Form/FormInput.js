import './Form.css'

export const FormInput = ({ label, required, value, placeholder, onChange, onKeyDown, disabled, children }) => {
    return (
        <div className="Form-input">
            <strong className="Form-input-label">
                {label}{required && <span className="required">*</span>}
            </strong>
            <input 
            className="Form-input-control" 
            type="text" 
            value={value || ""} 
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={disabled}
            />
            {children}
        </div>
    );
}