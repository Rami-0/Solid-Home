import scss from './DiscountCard.module.scss';
import { Cards } from '../../types/types';

type Props = Cards;
const DiscountCard: React.FC<Props> = (props: Props) => {
  return (
    <div className={scss['card']}>
      <div className={scss['about_block']}>
        <p>{props.company}</p>
        <h4>{props.info}</h4>
        <h5>{props.date}</h5>
        <p>{props.title}</p>
      </div>
      <div className={scss['logo_block']}>
        <div>
          <img src={props.logo} alt="avangard logo" />
        </div>
        <p>{props.cash}</p>
      </div>
    </div>
  );
};

export default DiscountCard;
