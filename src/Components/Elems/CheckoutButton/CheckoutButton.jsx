import s from './CheckoutButton.module.css';

export default function CheckoutButton({
  onAddToOrder,
  buttonName,
  isChoices,
  authentication,
  logIn,
}) {
  return (
    <button
      className={s.checkoutBtn}
      type="button"
      onClick={authentication ? () => onAddToOrder() : logIn}
      disabled={isChoices}
    >
      {buttonName}
    </button>
  );
}
