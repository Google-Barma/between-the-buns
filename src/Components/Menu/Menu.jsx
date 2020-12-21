import { GiHamburger, GiSushis, GiMouthWatering } from 'react-icons/gi';
import s from './Menu.module.css';
import dbMenu from '../DBMenu';
import ItemsList from './ItemsList/ItemsList';
import Banner from './Banner';
import Section from '../Layouts/Section';

export default function Menu({ setOpenItem }) {
  return (
    <main className={s.main}>
      <Banner />
      <Section name="burgers">
        <div className={s.sectionTitleWrapper}>
          <GiHamburger size="100" color="#FFDF1F" />
          <h2 className={s.sectionTitle}>Бургеры</h2>
        </div>
        <ItemsList itemList={dbMenu.burger} setOpenItem={setOpenItem} />
      </Section>
      <Section name="combo">
        <div className={s.sectionTitleWrapper}>
          <GiMouthWatering size="100" color="#FFDF1F" />
          <h2 className={s.sectionTitle}>Напитки / Сетты</h2>
          <GiSushis size="100" color="#FFDF1F" />
        </div>
        <ItemsList itemList={dbMenu.other} setOpenItem={setOpenItem} />
      </Section>
    </main>
  );
}
