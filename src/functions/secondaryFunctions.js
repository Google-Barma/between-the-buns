function localizePrice(price) {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'UAH',
  });
}

function totalPrice(price, count) {
  return price * count;
}

export { localizePrice, totalPrice };
