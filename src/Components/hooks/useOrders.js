import { useState } from 'react';

export default function useOrders() {
  const [orders, setOrders] = useState([]);

  return { orders, setOrders };
}
