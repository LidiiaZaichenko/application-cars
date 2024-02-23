import styled from 'styled-components';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';


export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 128px;
`;

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
