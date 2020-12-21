import styled from 'styled-components';
import s from './ModalItem.module.css';
import CheckoutButton from '../Elems/CheckoutButton/CheckoutButton';

export default function ModalItem({
  openItem,
  setOpenItem,
  orders,
  setOrders,
}) {
  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = { ...openItem };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <div className={s.overlay} id="overlay" onClick={closeModal}>
      <div className={s.modal}>
        {/* <Bunner img={openItem.img} /> */}
        <h2 className={s.title}>{openItem.name}</h2>
        <div className={s.imageWrapper}>
          <img className={s.image} src={openItem.img} alt={openItem.name} />
        </div>

        <p className={s.price}>{openItem.price}</p>

        <CheckoutButton
          onAddToOrder={addToOrder}
          buttonName="Добавить к заказу"
        ></CheckoutButton>
      </div>
    </div>
  );
}
