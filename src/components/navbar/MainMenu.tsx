import classNames from "classnames/bind";
import styles from "../../style/navbar.module.scss";
import { MAINMENU_ITEM_CONTENTS } from "../../constants";
import { IMainMenuItemContents } from "../../types/constants.type";
interface IItemProps {
  itemData: IMainMenuItemContents;
}

const cx = classNames.bind(styles);

const MainMenu = () => {
  const Item:React.FC<IItemProps> = ({ itemData }) => {
    return (
      <li className={cx("item")}>
        <div className={cx("item__name")}>{itemData.name}</div>
        <div className={cx("item__contents")}>
          <div className={cx("contents__menu")}>
            <ul className={`${cx("menu__menu")} inner`}>
              {Object.keys(itemData.contents.menu).map((menuName, i) => (
                <li key={i}>
                  <h4>{menuName}</h4>
                  <ul>
                    {itemData.contents.menu[menuName].map((menuItem, i) => (
                      <li key={i}>{menuItem}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("contents__texture")}>
            <div className={`${cx("texture__contents")} inner`}>
              {itemData.contents.texture.map((texture, i) => (
                <div key={i}>
                  <p>{texture.title}</p>
                  <p>{texture.contents}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </li>
    );
  };
  return (
    <ul className={cx("main-menu")}>
      {MAINMENU_ITEM_CONTENTS.map((item, i) => (
        <Item key={i} itemData={item} />
      ))}
    </ul>
  );
}
export default MainMenu;
