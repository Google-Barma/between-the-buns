import s from './Menu.module.css';

export default function Banner() {
  return (
    <div className={s.bannerImage}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>
          доставка бургера до 29 минут или бургер в подарок
        </h1>
      </div>
      <div className={s.descriptionWrapper}>
        <p className={s.description}>
          Мы работаем с 11:00 и до 22:45, поэтому сейчас не сможем привезти для
          Вас еду. Если Вы хотите сделать предзаказ - укажите, пожалуйста, в
          комментариях к заказу на какое время. С любовью, Contrabanda.
        </p>
      </div>
    </div>
  );
}
