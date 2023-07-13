import React from 'react';
import Main from '../../components/Main/Main';
import DiscountSlider from '../../components/DiscountSlider/DiscountSlider';
import Building from '../../components/Building/Building';
import Realtors from '../../components/Realtors/Realtors';
import Servise from '../../components/Servise/Servise';

const HomePage: React.FC = () => {
  return (
    <section>
      <Main />
      <DiscountSlider />
      <Building />
      <Realtors />
      <Servise />
    </section>
  );
};

export default HomePage;
