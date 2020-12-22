import { createPortal } from 'react-dom';
import s from './ModalItem.module.css';
import useCount from '../Hooks/useCount';
import CheckoutButton from '../Elems/CheckoutButton/CheckoutButton';
import CountItem from '../Elems/CountItem/CountItem';
import { localizePrice, totalPrice } from '../../functions/secondaryFunctions';
import Toppings from './Toppings/Toppings';
import useToppings from '../Hooks/useToppings';

const modalRoot = document.querySelector('#modal-root');

export default function ModalItem({
  openItem,
  setOpenItem,
  orders,
  setOrders,
}) {
  const toppings = useToppings(openItem);

  const counter = useCount();

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
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

        <Toppings {...toppings} />

        <p className={s.price}>Цена: {openItem.price}</p>
        <p>Общая сумма: {localizePrice(total)}</p>
        <CountItem {...counter} />
        <CheckoutButton
          onAddToOrder={addToOrder}
          buttonName="Добавить к заказу"
        ></CheckoutButton>
      </div>
    </div>,
    modalRoot,
  );
}
