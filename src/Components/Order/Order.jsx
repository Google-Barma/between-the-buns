import styled from 'styled-components';

import CheckoutButton from '../Modal/CheckoutButton/CheckoutButton';
import OrderListItem from './OrderListItem';

const OrderStyles = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0px;
  background: #fff;
  width: 300px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div``;

const TotalPrice = styled.span``;

const EmptyList = styled.p`
  text-align: center;
`;

export default function Order({ orders }) {
  return (
    <OrderStyles>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ? (
          <OrderList>
            {orders.map(order => (
              <OrderListItem order={order} key={order.id} />
            ))}
          </OrderList>
        ) : (
          <EmptyList>Список заказов пуст</EmptyList>
        )}
      </OrderContent>
      <Total>
        <span>Итого:</span>
        <span>5</span>
        <TotalPrice>850грн</TotalPrice>
      </Total>
      <CheckoutButton buttonName="Оформить"></CheckoutButton>
    </OrderStyles>
  );
}
