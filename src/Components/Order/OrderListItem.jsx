import styled from 'styled-components';
import trashImage from '../../image/trash.svg';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0 15px;
`;

const ItemName = styled.span``;

const ItemPrice = styled.span`
  margin: 0 20px 0 10px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default function OrderListItem({ order }) {
  return (
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>2</span>
      <ItemPrice>
        {order.price.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'UAH',
        })}
      </ItemPrice>
      <TrashButton />
    </OrderItemStyled>
  );
}
