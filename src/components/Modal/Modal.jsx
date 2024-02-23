import Modal from 'react-modal';
import {Image } from './Modal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    border: '0px solid rgb(204, 204, 204)',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalItem = ({ car, isCloseModal, isOpenModal }) => {

  const {
    img,
    make,
    model,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;
  return (
    
    <Modal
      isOpen={isOpenModal}
      onRequestClose={isCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <Image src={img} alt="" />
      </div>
      <div>
        <h2>
          {make}
          <span>{}</span>
        </h2>
        <p>{rentalPrice}</p>
      </div>
      <ul>
        <li>{address}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{mileage}</li>
        <li>{make}</li>
      </ul>
      <button type="button">Rental car</button>
    </Modal>
  );
};
