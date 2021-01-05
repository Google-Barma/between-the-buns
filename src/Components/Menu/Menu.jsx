import { useContext } from 'react';
import { GiHamburger, GiSushis, GiMouthWatering } from 'react-icons/gi';
import s from './Menu.module.css';
import ItemsList from './ItemsList/ItemsList';
import Banner from './Banner';
import Section from '../Layouts/Section';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { Context } from '../../helpers/context';

export default function Menu() {
  const {
    openItem: { setOpenItem },
    dbMenu,
  } = useContext(Context);

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
      ) : (
        <div className={s.loaderWrapper}>
          <Loader color="#FFDF1F" type="Puff" height={100} width={100} />
        </div>
      )}
    </main>
  );
}
