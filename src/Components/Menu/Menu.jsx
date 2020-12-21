import s from './Menu.module.css';
import dbMenu from '../DBMenu';
import ListItem from './ListItem';
import Banner from './Banner';

export default function Menu({ setOpenItem }) {
  return (
    <main className={s.main}>
      <Banner />
      <section>
        <h2>Бургеры</h2>
        <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
      </section>
      <section>
        <h2>Закуски / Напитки</h2>
        <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
      </section>
    </main>
  );
}
