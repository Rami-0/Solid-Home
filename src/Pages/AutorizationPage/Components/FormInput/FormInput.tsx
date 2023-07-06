/* eslint-disable react/prop-types */
import { useState } from 'react';
import scss from './FormInput.module.scss';

const FormInput = (props: any) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <div className={scss['formInput']}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
      />
      <span className="Subtitle--4">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
