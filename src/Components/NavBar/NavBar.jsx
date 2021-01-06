import { useContext } from 'react';
import s from './NavBar.module.css';
import Logo from '../Logo/Logo';
import { ImPacman } from 'react-icons/im';
import { Context } from '../../helpers/context';

export default function NavBar() {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo />
        {authentication ? (
          <>
            <p className={s.userName}>
              {authentication ? authentication.displayName : null}
            </p>
            <p className={s.userEmail}>
              {authentication ? authentication.email : null}
            </p>
            <button className={s.signOutBtn} onClick={logOut}>
              Выйти
            </button>
          </>
        ) : (
          <button className={s.loginBtn} type="button" onClick={logIn}>
            <ImPacman size="32" className={s.loginImage} />
            Войти
          </button>
        )}
      </div>
    </header>
  );
}
