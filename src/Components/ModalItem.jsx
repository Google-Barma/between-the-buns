import styled from 'styled-components';
import ModalButton from './ModalButton';
import ButtonCheckout from './ButtonCheckout';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Bunner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Content = styled.section`
  padding: 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Pacifico', cursive;
`;

export default function ModalItem({ openItem, setOpenItem }) {
  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Bunner img={openItem.img} />
        <Content>
          <HeaderContent>
            <h2>{openItem.name}</h2>
            <p>{openItem.price}</p>
          </HeaderContent>
          <ButtonCheckout>Добавить</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
}
