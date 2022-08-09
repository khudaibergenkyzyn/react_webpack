import styled from 'styled-components';
export const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
`;
export const Link = styled.a`
  text-decoration: none;
  color: ${({ active }) => (active ? '#15e4d0' : '#272a2a')};
  font-size: 18px;
`;
export const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
