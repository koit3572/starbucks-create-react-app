import starbucksLogo from "../../src_assets/starbucks_logo.png"
import { Link } from 'react-router-dom';
import Container from '../Container';
import MainMenu from './MainMenu';
import SideMenu from './SideMenu';
import styles from "../../style/navbar.module.scss"
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Navbar = () => {
  return (
    <Container backgroundColor="#F6F5F0">
      <div className={cx("navbar")}>
        <div className={cx("logo")}>
          <Link to={"/"}>
            <img src={starbucksLogo} alt="" />
          </Link>
        </div>
        <div className={cx("menus")}>
          <SideMenu />
          <MainMenu />
        </div>
      </div>
    </Container>
  );
}

export default Navbar