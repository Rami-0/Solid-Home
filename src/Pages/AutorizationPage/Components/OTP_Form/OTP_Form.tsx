import React, { useEffect, useMemo, useState } from 'react';
import scss from './OTP.module.scss';
import Button from './../../../../components/Button/Button';
import { RE_DIGIT } from '../../../../constants/RegExp';
import useAuth from '../../../../hooks/useAuth';
import { multi_stepFormProps } from '../../../../types/multiFormProps';
import { useTranslation } from 'react-i18next';

interface OTPprops extends multi_stepFormProps {
  isReturnPass?: boolean;
  isDirect?: boolean;
}

const OTP_Form: React.FC<OTPprops> = ({ prevPage, nextPage, isReturnPass, isDirect }) => {
  const { t } = useTranslation(['OTP']);
  const translationPath = 'Otp.';

  const [otp, setOtp] = useState('');
  const { user } = useAuth();
  console.log(user);

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
    value: user?.phone_number
  });

  useEffect(() => {
    if (user?.phone_number === '' || user?.phone_number === undefined) {
      setSendTo({
        name: 'Email',
        value: user?.email
      });
    } else {
      setSendTo({
        name: 'Number',
        value: user?.phone_number
      });
    }
  }, []);
  console.log(sendTo);

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
    nextPage ? nextPage() : '';
    //TODO : function
  };

  // render

  const renderTop =
    sendTo.name != 'Email' ? (
      <p className="Subtitle--4">
        {t(`${translationPath}top.1-1`)}
        {sendTo.value + '\n'}
        <a href="#" onClick={handleSendToEmail}>
          {t(`${translationPath}top.1-2`)}
        </a>
      </p>
    ) : (
      <p className="Subtitle--4">
        {t(`${translationPath}top.1-3`)} {sendTo.value}
      </p>
    );

  const renderTopToReturnPass = (
    <p className="Subtitle--4">
      {t(`${translationPath}top.2-1`)}
      {sendTo.value}
    </p>
  );
  const renderTopDirect = (
    <p className="Subtitle--4">
      {t(`${translationPath}top.3-1`)} {sendTo.value}
    </p>
  );

  return (
    <form className={scss['form']}>
      <div className={scss['form__top']}>
        <h1 style={{ color: 'var(--blue)' }}>
          {isReturnPass ? t(`${translationPath}enter-forgot`) : t(`${translationPath}enter`)}
        </h1>
        {isReturnPass ? renderTopToReturnPass : isDirect ? renderTopDirect : renderTop}
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
        <p className="Button--2">{t(`${translationPath}next`)}</p>
      </Button>
      <Button variant="secondary" onClick={handleResend} style={{ height: 55 }}>
        <p className="Button--2">{t(`${translationPath}sendAgain`)}</p>
      </Button>
      <p className={scss['links'] + ' Subtitle--4'}>
        <a onClick={prevPage}>{t(`${translationPath}back`)}</a>
      </p>
    </form>
  );
};

export default OTP_Form;
