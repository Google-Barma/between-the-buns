import s from './NavBar.module.css';
import Logo from '../Logo/Logo';
import { ImPacman } from 'react-icons/im';

export default function NavBar() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo />
        <button className={s.loginBtn} type="button">
          <ImPacman size="32" className={s.loginImage} />
          Войти
        </button>
      </div>
    </header>
  );
}
