import s from './CheckoutButton.module.css';

export default function CheckoutButton({
  onAddToOrder,
  buttonName,
  isChoices,
}) {
  return (
    <button
      className={s.checkoutBtn}
      type="button"
      onClick={() => onAddToOrder()}
      disabled={isChoices}
    >
      {buttonName}
    </button>
  );
}
