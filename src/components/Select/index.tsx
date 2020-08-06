import React, {SelectHTMLAttributes} from 'react';
import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({options, label, name, ...rest}) => {
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue='' id={name} {...rest}>
                <option value='' disabled  hidden>selecione uma opção</option>
                {options.map(options => {
                    return <option key={options.value} value={options.value}>
                        {options.label}
                    </option>
                })}
            </select>
          </div>
    );
}

export default Select;