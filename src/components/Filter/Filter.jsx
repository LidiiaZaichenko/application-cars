import { Formik, Form, Field } from 'formik';
import { name } from './makes';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from '../../redux/filterSlice';
// import { selectFilter } from '../../redux/selectors';

export const FiltersForm = () => {

    // const dispatch = useDispatch();
    // const filter = useSelector(selectFilter);
  return (
    <>
      <Formik
        initialValues={{
          carMake: name,
        }}
        onSubmit={values=>values.carMake}
      >
        <Form>
          <label>
            Car brand
            <Field as="select" name="carMake" placeholder="Enter the text">
              {name.map((make , index) => (
                <option key={index} value={make }>
                  {make }
                </option>
              ))}
            </Field>
          </label>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};
