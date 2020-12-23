// import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import ModalItem from './Components/Modal/ModalItem';
import Order from './Components/Order/Order';
import useOpenItem from './Components/Hooks/useOpenItem';
import useOrders from './Components/Hooks/useOrders';

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  console.log(orders);

  return (
    <>
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
