import { ModalItem } from 'components/Modal/Modal';
import { Container, Image } from './Carcard.styles';
import { useState } from 'react';

export default function Carcard({ car }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

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
    <>
      <Container>
        <div>
          <Image src={img} width={461} height={248} alt="" />
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
        <button type="button" onClick={openModal}>
          Learn more
        </button>
      </Container>
      <ModalItem
        car={car}
        isCloseModal={closeModal}
        isOpenModal={modalIsOpen}
      />
    </>
  );
}
