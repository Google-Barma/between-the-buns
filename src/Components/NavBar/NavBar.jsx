import s from './NavBar.module.css';
import logoImg from '../../image/logo.svg';
import { ImPacman } from 'react-icons/im';

export default function NavBar() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <img className={s.logoImage} src={logoImg} alt="logo" />
          <h1 className={s.title}>BetweenTheBuns</h1>
        </div>

        <button className={s.loginBtn} type="button">
          <ImPacman size="32" className={s.loginImage} />
          Войти
        </button>
      </div>
    </header>
  );
}
