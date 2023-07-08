import Slider from 'react-slick';
import scss from './DiscountSlider.module.scss';
import DiscountCard from '../DiscountCard/DiscountCard';
import { slider_data } from '../../constants/SliderCards';
import { useMemo } from 'react';
import right_arrow from './assets/right-arrow.svg';
import left_arrow from './assets/left-arrow.svg';
import { useTranslation } from 'react-i18next';

const DiscountSlider: React.FC = () => {
  const { t } = useTranslation(['DiscountSlider']);
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div className={scss['right_back']} onClick={onClick}>
        <img className={scss['arrow']} src={right_arrow} alt="arrow" />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div className={scss['left_back']} onClick={onClick}>
        <img className={scss['left_arrow']} src={left_arrow} alt="arrow" />
      </div>
    );
  }
  const settings = {
    dots: false,
    speed: 500,
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
  const renderCard = useMemo(
    () => slider_data.map((slider, index) => <DiscountCard key={index} {...slider} />),
    [slider_data]
  );
  return (
    <div className={scss['container_discount']}>
      <h1>{t('DiscountSlider.Best')}</h1>
      <Slider {...settings}>{renderCard}</Slider>
    </div>
  );
};

export default DiscountSlider;
