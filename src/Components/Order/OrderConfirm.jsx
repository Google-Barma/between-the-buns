import { useContext, useState } from 'react';
import s from './OrderConfirm.module.css';
import Overlay from '../Elems/Overlay/Overlay';
import { projection } from '../../helpers/helpers';
import { localizePrice, totalPrice } from '../../helpers/helpers';
import { Context } from '../../helpers/context';
import CheckoutButton from '../Elems/CheckoutButton/CheckoutButton';

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

  const handleOrderBtn = () => {
    sendOrder(database, orders, authentication);
    setOrders([]);
    setClose(true);
    setTimeout(() => {
      setOpenOrderConfirm(false);
    }, 3000);
  };

  return (
    <Overlay id="overlay" fn={setOpenOrderConfirm}>
      <div className={s.modal}>
        {!close ? (
          <>
            <h2 className={s.orderTitle}>{authentication.displayName}</h2>
            <h3 className={s.text}>
              Вам осталось только подтвердить заказ на общую сумму:
            </h3>

            <span className={s.price}>{localizePrice(countTotalPrice)}</span>
            <div className={s.btnWrapper}>
              <CheckoutButton
                buttonName="Подтвердить"
                onPushBtn={handleOrderBtn}
              />
            </div>
          </>
        ) : (
          <span>Спасибо за заказ</span>
        )}
      </div>
    </Overlay>
  );
}
