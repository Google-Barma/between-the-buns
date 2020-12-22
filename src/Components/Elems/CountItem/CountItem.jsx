import useCount from '../../hooks/useCount';
import s from './CountItem.module.css';

export default function CountItem() {
  const { count, setCount, handleChangeCount } = useCount();

  return (
    <>
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
        value={count}
        onChange={e => handleChangeCount(e)}
      />
      <button
        className={s.quantityBtn}
        type="button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </>
  );
}
