import styled from 'styled-components';

export const Container = styled.div`
  width: 274px;
  height: 426px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 274px;
  height: 268px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;