import { Container, Image } from "./Carcard.styles";


export default function Carcard() {
  const car = {
    id: 9582,
    year: 2008,
    make: 'Buick',
    model: 'Enclave',
    type: 'SUV',
    img: 'https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg',
    description:
      'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
    fuelConsumption: '10.5',
    engineSize: '3.6L V6',
    accessories: ['Leather seats', 'Panoramic sunroof', 'Premium audio system'],
    functionalities: [
      'Power liftgate',
      'Remote start',
      'Blind-spot monitoring',
    ],
    rentalPrice: '$40',
    rentalCompany: 'Luxury Car Rentals',
    address: '123 Example Street, Kiev, Ukraine',
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 5858,
  };

  return (
    <Container>
      <div><Image src={car.img} alt="" /></div>
      <div>
        <h2>
          {car.make}
          <span>{car.model}</span>
        </h2>
        <p>{car.rentalPrice}</p>
      </div>
      <ul>
        <li>{car.address}</li>
        <li>{car.rentalCompany}</li>
        <li>{car.type}</li>
        <li>{car.model}</li>
        <li>{car.mileage}</li>
        <li>{car.make}</li>
      </ul>
      <button>Learn more</button>
    </Container>
  );
}