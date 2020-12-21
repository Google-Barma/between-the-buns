import s from './Menu.module.css';

export default function Banner() {
  return (
    <div className={s.bannerImage}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>
          доставка <span>бургера</span> до 29 минут или <span>бургер</span> в
          подарок
        </h1>
      </div>
      <div className={s.descriptionWrapper}>
        <p className={s.description}>
          Мы работаем с <span>11:00</span> и до <span>22:45</span>, поэтому
          сейчас не сможем привезти для Вас еду. Если Вы хотите сделать
          предзаказ - укажите, пожалуйста, в комментариях к заказу на какое
          время. С любовью, Contrabanda.
        </p>
      </div>
    </div>
  );
}
