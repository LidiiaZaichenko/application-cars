import { NavLink } from 'react-router-dom';
import { NavigationStyle } from './Navigation.style';

export const Navigation = () => {
  return (
    <NavigationStyle>
      <NavLink to="/">Home</NavLink >
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </NavigationStyle>
  );
};
