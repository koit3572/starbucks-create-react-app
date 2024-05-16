import classNames from "classnames/bind";
import styles from "../../style/navbar.module.scss";
const cx = classNames.bind(styles);
const MainMenu = () => {
  return (
    <div className={cx("navbar", "menus", "main-menu")}>
      MainMenu
    </div>
  );
}
export default MainMenu;
