import styled from 'styled-components';

export const About = styled.div`
  padding: 50px 130px;
`;
export const AboutInner = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AboutItem = styled.div`
  width: ${({ first }) => (first ? '60%' : '37%')};
  position: relative;
  height: 400px;
`;
export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: #cfedf0;
  z-index: -1;
`;
export const AboutBtn = styled.a`
  background-color: #1becde;
  font-size: 18px;
  color: #fff;
  padding: 10px 30px;
  margin: 50px 30px 30px 0;
  display: inline-block;
  text-decoration: none;
  :hover {
    background-color: #252525;
    transition: 0.4s;
  }
`;
export const AboutItemBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(27, 236, 222, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
`;
export const AboutBgImage = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: black;
  > img {
    width: 50%;
  }
`;
export const AboutChild = styled.div`
  position: relative;
  margin-top: 30px;
  ${({ first }) => (first ? 'margin-left:10%;' : '')};
  :hover ${AboutItemBg} {
    display: flex;
  }
`;
