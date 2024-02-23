// import Carlist from "./Carslist/Carslist";



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
      
//       <Carlist/>
//     </div>
//   );
// };


import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Loyout';


const HomePage = lazy(() => import('../pages/Home/Home'));
const Adverts = lazy(() => import('../pages/ Adverts/Adverts'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/catalog" element={<Adverts />} />
                <Route path="/favorites" element={<Favorites />} />
            </Route>
            <Route path = "*" element = {<Navigate to = "/" />} />
        </Routes>
    )
}