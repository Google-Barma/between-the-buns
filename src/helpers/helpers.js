function localizePrice(price) {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'UAH',
  });
}

function totalPrice(order) {
  const selectedToppings = order.topping ? order.topping : [];
  const countTopping = selectedToppings.filter(item => item.checked).length;
  const priceTopping = order.price * 0.1 * countTopping;

  return (order.price + priceTopping) * order.count;
}

function projection(rules) {
  const keys = Object.keys(rules);
  return obj =>
    keys.reduce((newObj, key) => {
      newObj[key] = rules[key].reduce(
        (value, fn, i) => (i ? fn(value) : obj[fn]),
        null,
      );
      return newObj;
    }, {});
}

export { localizePrice, totalPrice, projection };
