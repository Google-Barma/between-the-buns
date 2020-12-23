import { GiTrashCan } from 'react-icons/gi';
import s from './OrderListItem.module.css';
import { localizePrice, totalPrice } from '../../functions/secondaryFunctions';

export default function OrderListItem({ order, onDeleteItem }) {
  const topping = order.topping
    .filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  const price = totalPrice(order);

  return (
    <li className={s.list} key={order.id}>
      <div className={s.orderContent}>
        <p className={s.name}>{order.name}</p>
        <p className={s.name}>{order.choices && order.choices}</p>

        <span className={s.quantity}>{order.count} шт.</span>
        <span className={s.price}>{localizePrice(price)}</span>
      </div>
      <button
        className={s.trashBtn}
        type="button"
        onClick={e => onDeleteItem(order.id)}
      >
        <GiTrashCan size="35" color="#FFDF1F" />
      </button>
      {topping && <p>topping</p>}
    </li>
  );
}
