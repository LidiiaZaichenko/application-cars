import { Container, Image } from './Carslist.styles';
import { cars } from './addCars';

export default function Carlist() {
  const allCars = cars;
  return (
    <Container>
      {allCars.map(
        ({
          id,
          make,
          img,
          model,
          rentalPrice,
          address,
          rentalCompany,
          type,
          mileage,
        }) => (
          <ul key={id}>
            <Container>
              <div>
                <Image src={img} alt="" />
              </div>
              <div>
                <h2>
                  {make}
                  <span>{model}</span>
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
              <button>Learn more</button>
            </Container>
          </ul>
        )
      )}
    </Container>
  );
}
