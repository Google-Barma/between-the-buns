import s from './OrderListItem.module.css';

export default function OrderListItem({ order }) {
  return (
    <li className={s.list} key={order.id}>
      <span>{order.name}</span>
      <span>2</span>
      <span className={s.price}>
        {order.price.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'UAH',
        })}
      </span>
      <button className="trashBtn" type="button"></button>
    </li>
  );
}
