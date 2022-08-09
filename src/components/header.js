import logo from "../images/logo.png";
import searchIcon from "../images/search-icon.png";
import {StyleHeader, Link, HeaderMenu} from "../styles/headerStyle.js";
function Header() {
  return (
    <StyleHeader>
      <div className="header-logo">
        <img src={logo} alt=""/>
      </div>
      <HeaderMenu>
        <Link active href="#">Home</Link>
        <Link href="#">Health</Link>
        <Link href="#">Medicine</Link>
        <Link href="#">News</Link>
        <Link href="#">Client</Link>
        <Link href="#">Contact us</Link>
        <img src={searchIcon} alt=""/>
      </HeaderMenu>
    </StyleHeader>

  );
}

export default Header;
