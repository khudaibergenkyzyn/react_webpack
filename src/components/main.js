import Header from "./header";
import MainInfo from './mainInfo';
import {MainStyled} from "../styles/mainStyle";
function Main() {
  return (
    <MainStyled>
      <Header/>
      <MainInfo/>
    </MainStyled>
  );
}

export default Main;
