import { useState } from 'react';

const getTopping = toppings =>
  toppings.map(item => ({ name: item, checked: false }));

export default function useToppings(openItem) {
  const readyTopping = openItem.toppings ? getTopping(openItem.toppings) : [];
  const [toppings, setToppings] = useState(readyTopping);

  const checkToppings = index => {
    setToppings(
      toppings.map((item, idx) => {
        const newItem = { ...item };
        if (idx === index) {
          newItem.checked = !newItem.checked;
        }
        return newItem;
      }),
    );
  };
  return { toppings, checkToppings };
}
