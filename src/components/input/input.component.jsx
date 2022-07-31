import React from 'react';
import './input.styles.css';

const InputField = ({ type, placeholder, step, defaultValue, setterFunction }) => {
    return (
        <div className="field">
            <div className='form'>
                <input type={type}
                    onChange={e => setterFunction(e.target.value)}
                    className='input-field'
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    step={step} required />
            </div>
        </div>
    )
}

export default InputField;