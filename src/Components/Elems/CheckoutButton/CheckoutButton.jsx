import s from './CheckoutButton.module.css';

export default function CheckoutButton({ onPushBtn, buttonName, isChoices }) {
  return (
    <button
      className={s.checkoutBtn}
      type="button"
      onClick={() => onPushBtn()}
      disabled={isChoices}
    >
      {buttonName}
    </button>
  );
}
