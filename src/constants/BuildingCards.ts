import { BuildingsCard } from '../types/types';
import primex from '../components/DiscountSlider/assets/primex.svg';
import star from '../components/DiscountSlider/assets/starforge.svg';
import terra from '../components/DiscountSlider/assets/terraguard.svg';
import pro from '../components/DiscountSlider/assets/pro.svg';
import primexHouse from '../components/Building/assets/primexHouse.jpg';
import starHouse from '../components/Building/assets/starforgeHouse.jpg';
import proHouse from '../components/Building/assets/PROHouse.jpg';
import terraHouse from '../components/Building/assets/terragHouse.jpg';

export const building_cards_data: BuildingsCard[] = [
  {
    logo: primex,
    house: primexHouse,
    companyName: 'Primex',
    description: 'Новейшие технологии строительства. Исключительные результаты каждый раз.',
    pathCompany: '/primex'
  },
  {
    logo: star,
    house: starHouse,
    companyName: 'Starforge',
    description: 'Экологически безопасное строительство с современным дизайном.',
    pathCompany: '/starforge'
  },
  {
    logo: terra,
    house: terraHouse,
    companyName: 'Terraguard ',
    description: 'Инновационные решения. Поразительные строительные проекты.',
    pathCompany: '/teraguard'
  },
  {
    logo: pro,
    house: proHouse,
    companyName: 'ProBuilding',
    description: 'Качественные строительные услуги для достижения превосходных результатов.',
    pathCompany: '/probuilding'
  }
];
