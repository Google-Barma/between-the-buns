import { GiHamburger, GiSushis, GiMouthWatering } from 'react-icons/gi';
import s from './Menu.module.css';
import ItemsList from './ItemsList/ItemsList';
import Banner from './Banner';
import Section from '../Layouts/Section';
import useFetch from '../Hooks/useFetch';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function Menu({ setOpenItem }) {
  const res = useFetch();

  const dbMenu = res.response;

  return (
    <main className={s.main}>
      <Banner />

      {dbMenu ? (
        <>
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
        </>
      ) : res.error ? (
        <div>Sorry, we will fixed it soon...</div>
      ) : (
        <div className={s.loaderWrapper}>
          <Loader color="#FFDF1F" type="Puff" height={100} width={100} />
        </div>
      )}
    </main>
  );
}
