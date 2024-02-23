import Carcard from 'components/Carcard/Carcard';
import { Container } from './Carslist.styles';
// import { cars } from './addCars';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectCars } from '../../redux/selectors';

export default function Carlist() {
  // const Cars = cars;

  const allcars = useSelector(selectCars);
  console.log(allcars)
  

  return (
    <Container>
      {allcars.map(car => (
        <Carcard key={nanoid()} car={car} />
      ))}
    </Container>
  );
}
