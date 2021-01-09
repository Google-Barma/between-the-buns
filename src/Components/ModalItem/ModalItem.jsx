import { useContext } from 'react';
import { createPortal } from 'react-dom';
import s from './ModalItem.module.css';
import useCount from '../Hooks/useCount';
import CheckoutButton from '../Elems/CheckoutButton/CheckoutButton';
import CountItem from '../Elems/CountItem/CountItem';
import { localizePrice, totalPrice } from '../../helpers/helpers';
import Toppings from './Toppings/Toppings';
import Choices from './Choices/Choices';
import useToppings from '../Hooks/useToppings';
import useChoices from '../Hooks/useChoices';
import Overlay from '../Elems/Overlay/Overlay';
import { Context } from '../../helpers/context';
import { ContextItem } from '../../helpers/contextItem';

const modalRoot = document.querySelector('#modal-root');

export default function ModalItem() {
  const {
    orders: { orders, setOrders },
    openItem: { openItem, setOpenItem },
  } = useContext(Context);

  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  const total = totalPrice(order);

  return createPortal(
    <ContextItem.Provider value={{ toppings, choices, openItem, counter }}>
      <Overlay id="overlay" className={s.overlay} fn={setOpenItem}>
        <div className={s.modal}>
          <h2 className={s.title}>{openItem.name}</h2>
          <div className={s.imageWrapper}>
            <img
              className={s.image}
              src={openItem.img}
              alt={openItem.name}
              width="400"
            />
          </div>

          <div className={s.toppings}>
            <div className={s.count}>
              <CountItem />
            </div>
            {openItem.toppings && <Toppings />}
            {openItem.choices && <Choices />}
          </div>
          <div className={s.orderBlock}>
            <div>
              <p className={s.price}>Цена: {openItem.price}</p>
              <p className={s.total}>Общая сумма: {localizePrice(total)}</p>

              <CheckoutButton
                onPushBtn={isEdit ? editOrder : addToOrder}
                isChoices={order.choices && !order.choice}
                buttonName={isEdit ? 'Редактировать' : 'Добавить к заказу'}
              />
            </div>
          </div>
        </div>
      </Overlay>
    </ContextItem.Provider>,
    modalRoot,
  );
}
