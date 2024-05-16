import classNames from "classnames/bind";
import styles from "../../style/navbar.module.scss"
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
const cx = classNames.bind(styles)
const SideMenu = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const handleOnSearchClick = () => {
    const inputEl = searchRef.current?.querySelector("input")
    inputEl?.focus();
  };
  useEffect(() => {
    const inputEl = searchRef.current?.querySelector("input");
    const searchIconEl = searchRef.current?.getElementsByClassName(
      cx("searchIcons")
    )[0];
    inputEl?.addEventListener("focus", () => {
      searchIconEl?.classList.add(cx("input-focused"));
      inputEl?.setAttribute("placeholder", "통합검색");
    });
    inputEl?.addEventListener("blur", () => {
      searchIconEl?.classList.remove(cx("input-focused"));
      inputEl?.setAttribute("placeholder", "");
    });
  },[])
  return (
    <div className={cx("side-menu")}>
      <ul className={cx("menu")}>
        <li className={cx("menu-item")}>
          <Link to={"/signin"}>Sign In</Link>
        </li>
        <li className={cx("menu-item")}>
          <Link to={"#"}>My Starbucks</Link>
        </li>
        <li className={cx("menu-item")}>
          <Link to={"#"}>Customer Service & Ideas</Link>
        </li>
        <li className={cx("menu-item")}>
          <Link to={"#"}>Find a Store</Link>
        </li>
      </ul>
      <div ref={searchRef} className={cx("search")}>
        <div className={cx("search-container")}>
          <input type="text" />
        </div>
        <div
          className={cx("search-container")}
          onClick={handleOnSearchClick}
        >
          <IoMdSearch className={cx("searchIcons")} />
        </div>
      </div>
    </div>
  );
}

export default SideMenu