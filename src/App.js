// import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import ModalItem from './Components/Modal/ModalItem';
import Order from './Components/Order/Order';
import useOpenItem from './Components/hooks/useOpenItem';
import useOrders from './Components/hooks/useOrders';
import useCount from './Components/hooks/useCount';

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  const counter = useCount();

  return (
    <>
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {openItem.openItem && (
        <ModalItem {...openItem} {...orders} {...counter} />
      )}
    </>
  );
}

export default App;
