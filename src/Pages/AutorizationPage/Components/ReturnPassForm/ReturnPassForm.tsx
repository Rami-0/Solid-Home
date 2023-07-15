import React, { useState } from 'react';
import InputMui from './../../../../components/InputMui/InputMui';
import scss from './ReturnPassForm.module.scss';
import Button from './../../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { multi_stepFormProps } from '../../../../types/multiFormProps';
import { useTranslation } from 'react-i18next';
import { emailPattern, phonePattern } from '../../../../constants/RegExp';

const ReturnPassForm: React.FC<multi_stepFormProps> = ({ nextPage }) => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation(['Login']);
  const translationPath = 'ReturnYourPassword.';
  const [inputError, setInputError] = useState<boolean>();

  let data;

  function checkInput(input: string) {
    if (emailPattern.test(input)) {
      setInputError(false);
      data = {
        email: userName
      };
    }

    if (phonePattern.test(input)) {
      setInputError(false);
      data = {
        phone_number: userName
      };
      return 'Phone number';
    }
    if (input != '') {
      setInputError(true);
      return 'Unknown';
    }
  }

  const submitHandler = (e: any) => {
    e.preventDefault();

    nextPage ? nextPage() : '';
    // TODO : Add code here
  };

  return (
    <div className={scss['formWrapper']}>
      <h1 className={scss['formWrapper--title']}>{t(`${translationPath}title`)}</h1>
      <form className={scss['formWrapper--form']} onSubmit={submitHandler}>
        <InputMui
          id="1"
          label={t(`${translationPath}inputLable`)}
          placeholder={t(`${translationPath}inputLable`)}
          value={userName}
          setValue={setUserName}
          required
        />
        <Button variant={'primary'} type={'submit'} style={{ height: 55 }}>
          <p className="Button--2">{t(`${translationPath}next`)}</p>
        </Button>
        <p className={scss['links'] + ' Subtitle--4'}>
          {t(`${translationPath}dontHave`)}
          <a onClick={() => navigate('/register')}>{t(`${translationPath}registerRN`)}</a>
        </p>
      </form>
    </div>
  );
};

export default ReturnPassForm;
