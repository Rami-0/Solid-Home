import React, { useMemo, useState } from 'react';
import scss from './OTP.module.scss';
import Button from './../../../../components/Button/Button';
import { RE_DIGIT } from '../../../../constants/constants';
import useAuth from '../../../../hooks/useAuth';

const OTP_Form = () => {
  const [otp, setOtp] = useState('');
  const { user } = useAuth();

  const onChange = (value: string) => setOtp(value);
  const valueLength = 4;

  const valueItems = useMemo(() => {
    const valueArray = otp.split('');
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }

    return items;
  }, [otp, valueLength]);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const newValue = otp.substring(0, idx) + targetValue + otp.substring(idx + 1);

    onChange(newValue);

    if (!isTargetValueDigit) {
      return;
    }

    const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.key !== 'Backspace' || target.value !== '') {
      return;
    }

    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const [sendTo, setSendTo] = useState({
    name: 'Number',
    value: user?.number
  });

  const handleSendToEmail = () => {
    setSendTo({
      name: 'Email',
      value: user?.email
    });
  };

  const handleResend = (e: any) => {
    e.preventDefault();
    //TODO : function
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //TODO : function
  };

  // render

  const renderTop =
    sendTo.name != 'Email' ? (
      <p className="Subtitle--4">
        Код по умолчанию отправлен Вам на: {sendTo.value}{' '}
        <a href="#" onClick={handleSendToEmail}>
          Отправить на e-mail?
        </a>
      </p>
    ) : (
      <p className="Subtitle--4">Код отправлен Вам на: {sendTo.value}</p>
    );

  return (
    <form className={scss['form']}>
      <div className={scss['form__top']}>
        <h1 style={{ color: 'var(--blue)' }}>Введите 4-значный код</h1>
        {renderTop}
      </div>
      <span className={scss['form__inputs']}>
        {valueItems.map((digit, idx) => (
          <input
            id={`${idx}`}
            key={idx}
            className={scss['from__inputs--input']}
            type="number"
            inputMode="numeric"
            onChange={(e) => inputOnChange(e, idx)}
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={valueLength}
            value={digit}
            onKeyDown={inputOnKeyDown}
            required
          />
        ))}
      </span>
      <Button variant="primary" onClick={handleSubmit} style={{ height: 55 }}>
        <p className="Button--2">Далее</p>
      </Button>
      <Button variant="secondary" onClick={handleResend} style={{ height: 55 }}>
        <p className="Button--2">Отправить повторно</p>
      </Button>
    </form>
  );
};

export default OTP_Form;
