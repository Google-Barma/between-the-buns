import s from './Choices.module.css';

export default function Choices({ openItem, choice, changeChoices }) {
  return (
    <div className={s.choiceWrapper}>
      <h3>Выбирайте:</h3>
      {openItem.choices.map((item, idx) => (
        <label className={s.label} key={idx}>
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
      ))}
    </div>
  );
}
