import classNames from "classnames/bind";
import styles from "../../style/navbar.module.scss";
import { MAINMENU_ITEM_CONTENTS } from "../../constants";
import Container from "../Container";
import { IMainMenuItemContents } from "../../types/constants.type";
interface IItemProps {
  itemData: IMainMenuItemContents;
}

const cx = classNames.bind(styles);
const mainMenu = cx("main-menu");
const item = cx("item")
const itemName = `${item} ${cx('item__name')}`
const itemContents = `${item} ${cx("item__contents")}`;
const contentsMenu = `${itemContents} ${cx("contents__menu")}`;
const menuMenu = cx("contents__menu","menu__menu");
const contentsTextTure = `${itemContents} ${cx("contents__texture")}`;
const textureContents = cx("contents__texture", "texture__contents");
const MainMenu = () => {
  const Item:React.FC<IItemProps> = ({ itemData }) => {
    return (
      <li className={item}>
        <div className={itemName}>{itemData.name}</div>
        <div className={itemContents}>
          <div className={contentsMenu}>
            <Container>
              <ul className={menuMenu}>
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
            </Container>
          </div>
          <div className={contentsTextTure}>
            <Container>
              <div className={textureContents}>
                {itemData.contents.texture.map((texture, i) => (
                  <div key={i}>
                    <p>{texture.title}</p>
                    <p>{texture.contents}</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </li>
    );
  };
  return (
    <ul className={mainMenu}>
      {MAINMENU_ITEM_CONTENTS.map((item, i) => (
        <Item key={i} itemData={item} />
      ))}
    </ul>
  );
}
export default MainMenu;
