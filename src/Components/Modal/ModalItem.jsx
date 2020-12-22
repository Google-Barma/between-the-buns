import s from './ModalItem.module.css';
import { createPortal } from 'react-dom';
import CheckoutButton from '../Elems/CheckoutButton/CheckoutButton';
import CountItem from '../Elems/CountItem/CountItem';
const modalRoot = document.querySelector('#modal-root');

export default function ModalItem({
  openItem,
  setOpenItem,
  orders,
  setOrders,
  count,
}) {
  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = { ...openItem, count };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  const countTotalPrice = count => count * openItem.price;

  return createPortal(
    <div className={s.overlay} id="overlay" onClick={closeModal}>
      <div className={s.modal}>
        <h2 className={s.title}>{openItem.name}</h2>
        <div className={s.imageWrapper}>
          <img className={s.image} src={openItem.img} alt={openItem.name} />
        </div>
        <p className={s.price}>{openItem.price}</p>
        <p>Общая сумма: {countTotalPrice(count)}</p>
        <CountItem />
        <CheckoutButton
          onAddToOrder={addToOrder}
          buttonName="Добавить к заказу"
        ></CheckoutButton>
      </div>
    </div>,
    modalRoot,
  );
}
