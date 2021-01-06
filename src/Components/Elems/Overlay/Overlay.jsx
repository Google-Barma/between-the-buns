import s from './Overlay.module.css';
import { useEffect } from 'react';

export default function Overlay({ children, id, fn }) {
  const closeModal = e => {
    if (e.target.id === 'overlay') {
      fn(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      fn(null);
    }
  };

  return (
    <div className={s.overlay} id={id} onClick={closeModal}>
      {children}
    </div>
  );
}
