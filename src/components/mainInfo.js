// import logo from '../images/logo.png';
import mainImg from '../images/main-img.png';
import arrow from '../images/next.png';
import {
  MainInfoStyled,
  MainTitle,
  MainBtn,
  MainLeft,
  Image,
  MainRight,
  MainArrows,
  MainArrow,
  Arrow
} from '../styles/mainStyle';
function MainInfo() {
  return (
    <MainInfoStyled>
      <MainLeft>
        <MainTitle color="#15e4d0">Health</MainTitle>
        <MainTitle>Care</MainTitle>
        <p>There are many variations of passages of Lorem Ipsum</p>
        <div className="main-btn">
          <MainBtn bgColor="#4bc5b8" href="">
            Contact Now
          </MainBtn>
          <MainBtn href="">Get A Quote</MainBtn>
        </div>
        <MainArrows>
          <MainArrow left>
            <Arrow left src={arrow} />
          </MainArrow>
          <MainArrow>
            <Arrow src={arrow} />
          </MainArrow>
        </MainArrows>
      </MainLeft>
      <MainRight>
        <Image src={mainImg} />
      </MainRight>
    </MainInfoStyled>
  );
}

export default MainInfo;
