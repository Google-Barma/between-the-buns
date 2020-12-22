import { useState } from 'react';

const getTopping = toppings => {
  if (!toppings) return;
  return toppings.map(item => ({ name: item, checked: false }));
};

export default function useToppings(openItem) {
  const [toppings, setToppings] = useState(getTopping(openItem.toppings));

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
