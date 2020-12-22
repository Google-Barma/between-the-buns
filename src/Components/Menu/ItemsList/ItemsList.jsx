import s from './ItemsList.module.css';
import localizePrice from '../../../functions/localizePrice';

export default function ListItem({ itemList, setOpenItem }) {
  return (
    <ul className={s.list}>
      {itemList.map(item => (
        <li
          className={s.item}
          key={item.id}
          img={item.img}
          onClick={() => setOpenItem(item)}
        >
          <div className={s.description}>
            <p className={s.name}>{item.name}</p>
            <p className={s.price}>{localizePrice(item.price)}</p>
          </div>
          <img className={s.image} src={item.img} alt={item.name} />
        </li>
      ))}
    </ul>
  );
}
