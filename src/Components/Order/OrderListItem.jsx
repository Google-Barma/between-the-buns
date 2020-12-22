import { GiTrashCan } from 'react-icons/gi';
import s from './OrderListItem.module.css';

export default function OrderListItem({ order }) {
  return (
    <li className={s.list} key={order.id}>
      <div className={s.orderContent}>
        <p className={s.name}>{order.name}</p>
        <span className={s.quantity}>2 шт.</span>
        <span className={s.price}>
          {order.price.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'UAH',
          })}
        </span>
      </div>
      <button className={s.trashBtn} type="button">
        <GiTrashCan size="35" color="#FFDF1F" />
      </button>
    </li>
  );
}
