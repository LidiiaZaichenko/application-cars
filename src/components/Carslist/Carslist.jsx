import Carcard from 'components/Carcard/Carcard';
import { Container } from './Carslist.styles';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectCars } from '../../redux/selectors';

export default function Carlist() {
 

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
