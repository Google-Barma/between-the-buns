import s from './NavBar.module.css';
import Logo from '../Logo/Logo';
import { ImPacman } from 'react-icons/im';

export default function NavBar({ authentication, logIn, logOut }) {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo />
        {authentication ? (
          <button onClick={logOut}>X</button>
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
