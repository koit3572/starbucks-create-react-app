import classNames from "classnames/bind";
import styles from "../../style/navbar.module.scss"
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const cx = classNames.bind(styles)
const sideMenu = cx("side-menu");
const menu = cx("menu");
const item = cx("item");
const search = cx("search");
const searchContainer = `${search} ${cx("search__container")}`;
const searchIcon = `${searchContainer} ${cx("search__Icons")}`;
const SideMenu = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const handleOnSearchClick = () => {
    const inputEl = searchRef.current?.querySelector("input")
    inputEl?.focus();
  };
  useEffect(() => {
    const inputEl = searchRef.current?.querySelector("input");
    const searchIconEl = searchRef.current?.getElementsByClassName(searchIcon)[0];
    inputEl?.addEventListener("focus", () => {
      searchIconEl?.classList.add(cx("focused"));
      inputEl?.setAttribute("placeholder", "통합검색");
    });
    inputEl?.addEventListener("blur", () => {
      searchIconEl?.classList.remove(cx("focused"));
      inputEl?.setAttribute("placeholder", "");
    });
  },[])
  return (
    <div className={sideMenu}>
      <ul className={menu}>
        <li className={item}>
          <Link to={"/signin"}>Sign In</Link>
        </li>
        <li className={item}>
          <Link to={"#"}>My Starbucks</Link>
        </li>
        <li className={item}>
          <Link to={"#"}>Customer Service & Ideas</Link>
        </li>
        <li className={item}>
          <Link to={"#"}>Find a Store</Link>
        </li>
      </ul>
      <div ref={searchRef} className={search}>
        <div className={searchContainer}>
          <input type="text" />
        </div>
        <div className={searchContainer} onClick={handleOnSearchClick}>
          <IoMdSearch className={searchIcon} />
        </div>
      </div>
    </div>
  );
}

export default SideMenu