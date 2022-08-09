import {SameTitle, SameP, Image} from "../styles/sameStyle";
import {About, AboutInner, AboutItem, AboutBg, AboutBtn, AboutChild, AboutItemBg, AboutBgImage} from "../styles/aboutStyle";
import image1 from "../images/about-1.png";
import image2 from "../images/about-2.png";
import icon from "../images/about-icon.png";
function AboutComponent() {
  return (
    <About>
      <SameTitle>Best Of Health care for you</SameTitle>
      <SameP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</SameP>
      <AboutInner>
        <AboutItem first>
          <AboutBg></AboutBg>
          <AboutChild first>
            <Image first src={image1}/>
            <AboutItemBg>
              <AboutBgImage>
                <img src={icon}/>
              </AboutBgImage>
            </AboutItemBg>
          </AboutChild>
        </AboutItem>
        <AboutItem>
          <AboutChild>
            <Image src={image2}/>
            <AboutItemBg>
              <AboutBgImage>
                <img src={icon}/>
              </AboutBgImage>
            </AboutItemBg>
          </AboutChild>
        </AboutItem>
      </AboutInner>
      <AboutBtn>Read More</AboutBtn>
    </About>
  );
}

export default AboutComponent;
