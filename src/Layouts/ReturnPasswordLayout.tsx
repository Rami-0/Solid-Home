import React, { useState } from 'react';
import LoginForm from '../Pages/AutorizationPage/Components/LoginForm/LoginForm';
import OTP_Form from '../Pages/AutorizationPage/Components/OTP_Form/OTP_Form';
import ReturnPassForm from '../Pages/AutorizationPage/Components/ReturnPassForm/ReturnPassForm';

const ReturnPasswordLayout = () => {
  const [page, setPage] = useState(0);
  const [NewPass, requestNewPass] = useState(false);
  const nextPage = () => {
    setPage(page + 1);
    return 0;
  };
  const prevPage = () => {
    setPage(page - 1);
    return 0;
  };
  const renderReturnPassword = () => {
    if (page === 0) {
      return <ReturnPassForm nextPage={nextPage} />;
    } else {
      return <OTP_Form nextPage={nextPage} prevPage={prevPage} isReturnPass={true} />;
    }
  };
  return <>{renderReturnPassword()}</>;
};

export default ReturnPasswordLayout;
