function localizePrice(price) {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'UAH',
  });
}

function totalPrice(order) {
  const countTopping = order.topping.filter(item => item.checked).length;
  const priceTopping = order.price * 0.1 * countTopping;

  return (order.price + priceTopping) * order.count;
}

export { localizePrice, totalPrice };
