import { useContext } from 'react';
import { ContextItem } from '../../../helpers/contextItem';
import s from './CountItem.module.css';

export default function CountItem() {
  const {
    counter: { count, setCount, handleChangeCount },
  } = useContext(ContextItem);

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
