/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { useState } from 'react';
import scss from './FormInput.module.scss';
import wrong_icon from './assets/wrong.png';
import right_icon from './assets/right.png';

interface IFormInput {
  label?: any;
  errorMessage: string;
  placeholder: string;

  onChange: any;
  id: string;
  name: string;
  confirm?: boolean;
  value?: any;
  inputProps?: object | any;
}

const FormInput: React.FC<IFormInput> = ({
  name,
  value,
  label,
  errorMessage,
  placeholder,
  onChange,
  id,
  confirm,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e: any) => setFocused(true);

  return (
    <div className={scss['formInput']} id={id}>
      <label>{label}</label>
      <input
        {...inputProps}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
        className={name === 'confirmPassword' && confirm ? scss['Confirmed'] : ''}
      />

      <span className="Subtitle--4">
        {!confirm ? <img src={wrong_icon} alt="wrong" /> : <img src={right_icon} alt="wrong" />}
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
