import s from './Toppings.module.css';

export default function Toppings({ toppings }) {
  return (
    <div className={s.toppingsWrapper}>
      {toppings.map((topping, idx) => (
        <label className={s.label} key={idx} htmlFor={topping}>
          <input className={s.input} type="checkbox" id={topping} />
          {topping}
        </label>
      ))}
    </div>
  );
}
