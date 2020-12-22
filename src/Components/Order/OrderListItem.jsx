import { GiTrashCan } from 'react-icons/gi';
import s from './OrderListItem.module.css';
import { localizePrice, totalPrice } from '../../functions/secondaryFunctions';

export default function OrderListItem({ order }) {
  return (
    <li className={s.list} key={order.id}>
      <div className={s.orderContent}>
        <p className={s.name}>{order.name}</p>
        <span className={s.quantity}>{order.count} шт.</span>
        <span className={s.price}>
          {localizePrice(totalPrice(order.count, order.price))}
        </span>
      </div>
      <button className={s.trashBtn} type="button">
        <GiTrashCan size="35" color="#FFDF1F" />
      </button>
    </li>
  );
}
