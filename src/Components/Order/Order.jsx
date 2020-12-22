import s from './Order.module.css';
import { useState } from 'react';
import { GiCardboardBox } from 'react-icons/gi';
import CheckoutButton from '../Elems/CheckoutButton/CheckoutButton';
import OrderListItem from './OrderListItem';

export default function Order({ orders }) {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const toggleOrderWindow = () => setIsOrderOpen(!isOrderOpen);

  return (
    <section className={isOrderOpen ? `${s.closeSection}` : `${s.openSection}`}>
      <button
        className={s.openOrdersBtn}
        type="button"
        onClick={() => toggleOrderWindow()}
      >
        <GiCardboardBox size="60" color="#FFDF1F" />
      </button>
      <h2 className={s.title}>ВАШ ЗАКАЗ</h2>
      <div className={s.orderContent}>
        {orders.length ? (
          <ul>
            {orders.map(order => (
              <OrderListItem order={order} key={order.id} />
            ))}
          </ul>
        ) : (
          <p className={s.emptyList}>Список заказов пуст</p>
        )}
      </div>
      <div>
        <span>Итого:</span>
        <span>5</span>
        <span>850грн</span>
      </div>
      <CheckoutButton buttonName="Оформить"></CheckoutButton>
    </section>
  );
}
