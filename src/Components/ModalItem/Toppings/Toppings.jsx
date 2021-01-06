import { useContext } from 'react';
import s from './Toppings.module.css';
import { ContextItem } from '../../../helpers/contextItem';

export default function Toppings() {
  const {
    toppings: { toppings, checkToppings },
  } = useContext(ContextItem);

  return (
    <ul className={s.toppingsWrapper}>
      {toppings.map((topping, idx) => (
        <li key={idx}>
          <label className={s.label} htmlFor={topping.name}>
            <input
              className={s.input}
              type="checkbox"
              id={topping.name}
              checked={topping.checked}
              onChange={() => checkToppings(idx)}
            />
            {topping.name}
          </label>
        </li>
      ))}
    </ul>
  );
}
