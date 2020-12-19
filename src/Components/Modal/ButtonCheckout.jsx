import styled from 'styled-components';

const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  font-size: inherit;
  background-color: #299b01;
  color: #fff;
  border-color: transparent;
  cursor: pointer;
  transition-property: color, background-color, border-color;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    color: #299b01;
    border-color: #299b01;
  }
`;

export default ButtonCheckout;
