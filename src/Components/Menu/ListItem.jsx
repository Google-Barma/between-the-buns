import styled from 'styled-components';
import s from './Menu.module.css';

const List = styled.ul``;

const Item = styled.li`
  
  }

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px black;
    &::after {
      opacity: 0;
    }
  }
`;

export default function ListItem({ itemList, setOpenItem }) {
  console.log(itemList);
  return (
    <ul className={s.listItem}>
      {itemList.map(item => (
        <li
          className={s.item}
          key={item.id}
          img={item.img}
          onClick={() => setOpenItem(item)}
        >
          <p>{item.name}</p>
          <p>
            {item.price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'UAH',
            })}
          </p>
          <img src={item.img} alt="" />
        </li>
      ))}
    </ul>
  );
}
