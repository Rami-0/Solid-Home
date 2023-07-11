import React from 'react';
import Main from '../../components/Main/Main';
import DiscountSlider from '../../components/DiscountSlider/DiscountSlider';
import Building from '../../components/Building/Building';

const HomePage: React.FC = () => {
  return (
    <section>
      <Main />
      <DiscountSlider />
      <Building />
    </section>
  );
};

export default HomePage;
