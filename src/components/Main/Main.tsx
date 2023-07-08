import Button from './../Button/Button';
import scss from './Main.module.scss';
import glas from './assets/glass.svg';
import main from './assets/main.jpg';
import { useTranslation } from 'react-i18next';

const Main: React.FC = () => {
  const { t } = useTranslation(['Main']);
  const placeholderText = t('Main.Adress');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //todo:function
  };

  return (
    <div className={scss['main']}>
      <img className={scss['background_image']} src={main} alt="" />
      <div className={scss['main_container']}>
        <h1>{t('Main.Best')}</h1>
        <div className={scss['search_block']}>
          <form>
            <span>
              <img className={scss['glas']} src={glas} alt="magnifying glass" />
            </span>
            <input type="text" placeholder={placeholderText} />
            <Button onClick={handleSubmit} variant={'search'}>
              {t('Main.Search')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
