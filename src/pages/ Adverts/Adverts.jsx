import Carlist from 'components/Carslist/Carslist';
import { fetchCars } from '../../redux/operations.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FiltersForm } from 'components/Filter/Filter.jsx';
export default function Adverts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <FiltersForm />
      <Carlist />
    </>
  );
}
