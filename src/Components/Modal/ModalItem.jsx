import { createPortal } from 'react-dom';
import s from './ModalItem.module.css';
import useCount from '../Hooks/useCount';
import CheckoutButton from '../Elems/CheckoutButton/CheckoutButton';
import CountItem from '../Elems/CountItem/CountItem';
import { localizePrice, totalPrice } from '../../functions/secondaryFunctions';
import Toppings from './Toppings/Toppings';
import Choices from './Choices';
import useToppings from '../Hooks/useToppings';
import useChoices from '../Hooks/useChoices';

const modalRoot = document.querySelector('#modal-root');

export default function ModalItem({
  openItem,
  setOpenItem,
  orders,
  setOrders,
}) {
  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.id] = order;
    setOrders(newOrders);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  const total = totalPrice(order);

  return createPortal(
    <div className={s.overlay} id="overlay" onClick={closeModal}>
      <div className={s.modal}>
        <h2 className={s.title}>{openItem.name}</h2>
        <div className={s.imageWrapper}>
          <img className={s.image} src={openItem.img} alt={openItem.name} />
        </div>

        {openItem.toppings && <Toppings {...toppings} />}
        {openItem.choices && <Choices {...choices} openItem={openItem} />}

        <p className={s.price}>Цена: {openItem.price}</p>
        <p>Общая сумма: {localizePrice(total)}</p>
        <CountItem {...counter} />
        <CheckoutButton
          onAddToOrder={isEdit ? editOrder : addToOrder}
          isChoices={order.choices && !order.choice}
          buttonName="Добавить к заказу"
        ></CheckoutButton>
      </div>
    </div>,
    modalRoot,
  );
}
