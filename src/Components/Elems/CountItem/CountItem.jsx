import s from './CountItem.module.css';

export default function CountItem({ count, setCount, handleChangeCount }) {
  return (
    <div>
      <button
        className={s.quantityBtn}
        disabled={count <= 1}
        type="button"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <input
        className={s.quantity}
        type="number"
        value={count < 1 ? 1 : count}
        onChange={handleChangeCount}
      />
      <button
        className={s.quantityBtn}
        type="button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
