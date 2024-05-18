import starbucksLogo from "../../src_assets/starbucks_logo.png"
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import SideMenu from './SideMenu';
import styles from "../../style/navbar.module.scss"
import classNames from "classnames/bind";
import Badges from "./Badges";
const cx = classNames.bind(styles);
const Navbar = () => {
  return (
    <div className="container">
      <div className='inner'>
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
        <div className={cx("badges")}>
          <Badges />
        </div>
      </div>
    </div>
  );
}

export default Navbar