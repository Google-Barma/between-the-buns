import { useContext } from 'react';
import { ContextItem } from '../../../helpers/contextItem';
import s from './Choices.module.css';

export default function Choices() {
  const {
    openItem,
    choices: { choice, changeChoices },
  } = useContext(ContextItem);

  return (
    <ul className={s.choiceWrapper}>
      <h3 className={s.title}>Выбирайте:</h3>
      {openItem.choices.map((item, idx) => (
        <li className={s.item} key={idx}>
          <label className={s.label}>
            <input
              className={s.input}
              type="radio"
              id="choices"
              name="choices"
              value={item}
              checked={choice === item}
              onChange={changeChoices}
            />
            {item}
          </label>
        </li>
      ))}
    </ul>
  );
}
