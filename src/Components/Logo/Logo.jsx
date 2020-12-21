import logoImg from '../../image/logo.svg';
import s from './Logo.module.css';

export default function Logo() {
  return (
    <div className={s.logo}>
      <img className={s.logoImage} src={logoImg} alt="logo" />
      <h1 className={s.title}>
        Between<span>The</span>Buns
      </h1>
    </div>
  );
}
