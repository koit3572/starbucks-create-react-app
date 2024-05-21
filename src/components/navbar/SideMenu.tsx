import classNames from "classnames/bind";
import styles from "../../style/navbar.module.scss"
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
interface IMenuList {
  textrue: string;
  href?: string;
}

const cx = classNames.bind(styles)
const menuList: IMenuList[] = [
  { textrue: "Sign In", href: "/signin" },
  { textrue: "My Starbucks" },
  { textrue: "Customer Service & Ideas" },
  { textrue: "Find a Store" },
];
const SideMenu = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const handleOnSearchClick = () => {
    const inputEl = searchRef.current?.querySelector("input")
    inputEl?.focus();
  };
  useEffect(() => {
    const inputEl = searchRef.current?.querySelector("input");
    const searchIconEl = searchRef.current?.getElementsByClassName(
      cx("container__search-Icons")
    )[0];
    inputEl?.addEventListener("focus", () => {
      searchIconEl?.classList.add(cx("container--focused"));
      inputEl?.setAttribute("placeholder", "통합검색");
    });
    inputEl?.addEventListener("blur", () => {
      searchIconEl?.classList.remove(cx("container--focused"));
      inputEl?.setAttribute("placeholder", "");
    });
  },[])
  return (
    <div className={cx("side-menu")}>
      <ul className={cx("side-menu__menu")}>
        {menuList.map((menu, i) => (
          <li key={i} className={cx("menu__item")}>
            <Link to={menu.href ? menu.href : "#"}>{menu.textrue}</Link>
          </li>
        ))}
      </ul>
      <div ref={searchRef} className={cx("search")}>
        <div className={cx("search__container")}>
          <input type="text" />
        </div>
        <div className={cx("search__container")} onClick={handleOnSearchClick}>
          <IoMdSearch className={cx('container__search-Icons')} />
        </div>
      </div>
    </div>
  );
}

export default SideMenu