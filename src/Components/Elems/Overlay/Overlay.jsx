import s from './Overlay.module.css';

export default function Overlay({ children, id, fn }) {
  return (
    <div className={s.overlay} id={id} onClick={fn}>
      {children}
    </div>
  );
}
