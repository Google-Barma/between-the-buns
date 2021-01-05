import { useContext, useState } from 'react';
import s from './OrderConfirm.module.css';
import Overlay from '../Elems/Overlay/Overlay';
import { projection } from '../../helpers/helpers';
import { localizePrice, totalPrice } from '../../helpers/helpers';
import { Context } from '../../helpers/context';

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: [
    'topping',
    arr => arr.filter(obj => obj.checked === true).map(obj => obj.name),
    arr => (arr.length ? arr : 'no topping'),
  ],
  choice: ['choice', item => (item ? item : 'no choices')],
};

const sendOrder = (firebaseDatabase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));

  firebaseDatabase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
};

export default function OrderConfirm() {
  const [close, setClose] = useState(false);

  const {
    database,
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const countTotalPrice = orders.reduce(
    (total, order) => total + totalPrice(order),
    0,
  );

  return (
    <Overlay>
      <div className={s.modal}>
        {!close ? (
          <>
            <h2 className={s.orderTitle}>{authentication.displayName}</h2>
            <h3 className={s.text}>Осталось только подтвердить заказ.</h3>
            <p>Итого:</p>
            <span className={s.price}>{localizePrice(countTotalPrice)}</span>
            <button
              onClick={() => {
                sendOrder(database, orders, authentication);
                setOrders([]);
                setClose(true);
                setTimeout(() => {
                  setOpenOrderConfirm(false);
                }, 3000);
              }}
            >
              Подтвердить
            </button>
          </>
        ) : (
          <div>Спасибо за заказ</div>
        )}
      </div>
    </Overlay>
  );
}
