import { useState, useContext } from 'react';
import s from './Order.module.css';
import { GiCardboardBox } from 'react-icons/gi';
import { FaBox } from 'react-icons/fa';
import OrderListItem from './OrderListItem';
import { localizePrice, totalPrice } from '../../helpers/helpers';
import { Context } from '../../helpers/context';

export default function Order() {
  const {
    orders: { orders, setOrders },
    auth: { authentication, logIn },
    openItem: { setOpenItem },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const toggleOrderWindow = () => setIsOrderOpen(!isOrderOpen);

  const countTotalPrice = () => {
    return orders.reduce((total, order) => total + totalPrice(order), 0);
  };

  const countTotalItem = () =>
    orders.reduce((result, order) => result + order.count, 0);

  const price = countTotalPrice();

  const deleteItemFromOrder = id => {
    const newOrders = orders.filter(order => order.id !== id);
    setOrders(newOrders);
  };

  return (
    <section className={isOrderOpen ? `${s.closeSection}` : `${s.openSection}`}>
      <button
        className={s.openOrdersBtn}
        type="button"
        onClick={() => toggleOrderWindow()}
      >
        {!isOrderOpen ? (
          <GiCardboardBox size="60" color="#FFDF1F" />
        ) : (
          <FaBox size="40" color="#FFDF1F" />
        )}
      </button>

      <h2 className={s.title}>ВАШ ЗАКАЗ</h2>

      <div className={s.orderContent}>
        {orders.length ? (
          <ul>
            {orders.map((order, idx) => (
              <OrderListItem
                order={order}
                key={order.id}
                id={order.id}
                index={idx}
                onDeleteItem={deleteItemFromOrder}
                setOpenItem={setOpenItem}
              />
            ))}
          </ul>
        ) : (
          <p className={s.emptyList}>Список заказов пуст</p>
        )}
      </div>

      <div className={s.orderResult}>
        <span>Кол-во: {countTotalItem()}</span>
        <span>Сумма: {localizePrice(price)}</span>
      </div>
      <button
        onClick={() => {
          if (authentication) {
            setOpenOrderConfirm(true);
          } else {
            logIn();
          }
        }}
      >
        Оформить
      </button>
    </section>
  );
}
