import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import ModalItem from './Components/ModalItem/ModalItem';
import Order from './Components/Order/Order';
import useOpenItem from './Components/Hooks/useOpenItem';
import useOrders from './Components/Hooks/useOrders';
import useAuth from './Components/Hooks/useAuth';
import useTitle from './Components/Hooks/useTitle';
import useDatabase from './Components/Hooks/useDatabase';
import OrderConfirm from './Components/Order/OrderConfirm';
import useOrderConfirm from './Components/Hooks/useOrderConfirm';
import { Context } from './helpers/context';

const firebaseConfig = {
  apiKey: 'AIzaSyADUneUpQcNzlbOX2HhF5GvRVCTLFU1WyY',
  authDomain: 'betweenthebuns-666fd.firebaseapp.com',
  databaseURL:
    'https://betweenthebuns-666fd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'betweenthebuns-666fd',
  storageBucket: 'betweenthebuns-666fd.appspot.com',
  messagingSenderId: '602025752642',
  appId: '1:602025752642:web:cb9e26f36b399e222595db',
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const database = firebase.database();
  const dbMenu = useDatabase(database);
  const orderConfirm = useOrderConfirm();

  useTitle(openItem.openItem);

  return (
    <Context.Provider
      value={{
        auth,
        openItem,
        dbMenu,
        orders,
        orderConfirm,
        database,
      }}
    >
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
