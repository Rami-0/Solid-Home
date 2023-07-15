import { TextField } from '@mui/material';
import React from 'react';
import scss from './InputMui.module.scss';

interface Iprops {
  id: string;
  label?: any | undefined;
  placeholder: string;
  value: any;
  setValue: any;
  inputProps?: any;

  type?: 'number' | 'email' | 'password' | 'tel';
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined;

  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  focused?: boolean;
  pattern?: string;
}

const InputMui: React.FC<Iprops> = (props) => {
  const { id, label, placeholder, type, value, setValue } = props;
  const { required, disabled, error, fullWidth, focused, color, inputProps } = props;

  // const handleTelFormat = (value: any) => {
  //   if (!value) return value;
  //   const phoneNumber = value.replace(/[^d]/g, '');
  //   const phoneNumberLength = phoneNumber.length;
  //   if (phoneNumberLength < 4) return phoneNumber;
  //   if (phoneNumberLength < 7) {
  //     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  //   }
  //   return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  // };

  return (
    <label htmlFor={id} className={scss['inputWrapper']}>
      {label ? <p className={scss['inputWrapper__lable']}>{label}</p> : ''}
      <TextField
        inputProps={inputProps}
        id={id}
        variant={'outlined'}
        className={scss['inputWrapper__input']}
        placeholder={placeholder}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (type === 'tel') {
            if (event.target.value?.length > 10) {
              setValue(value);
            } else {
              setValue(event.target.value);
            }
          } else {
            setValue(event.target.value);
          }
        }}
        color={color}
        type={type}
        required={required ? required : undefined}
        disabled={disabled ? disabled : undefined}
        error={error ? error : undefined}
        fullWidth={fullWidth ? fullWidth : undefined}
        focused={focused ? focused : undefined}
      />
    </label>
  );
};

export default InputMui;
