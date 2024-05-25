import React from 'react'
import Container from '../layout/Container'
import styles from '../../style/footer.module.scss'
import classNames from 'classnames/bind'
import Button1 from '../customElement/Button1';
import LogoOnlyText from '../../src_assets/starbucks_logo_only_text.png'
import { Link } from 'react-router-dom';
interface IDataList {
  to?: string;
  className?: string;
  contentText: string;
}
const cx = classNames.bind(styles)
const menuList: IDataList[] = [
  { contentText: "개인정보처리방침", className:"green" },
  { contentText: "영상정보처리기기 운영관리 방침" },
  { contentText: "홈페이지 이용약관" },
  { contentText: "위치정보 이용약관" },
  { contentText: "스타벅스 카드 이용약관" },
  { contentText: "윤리경영 핫라인" },
];
const infoList: IDataList[] = [
  { contentText: "사업자등록번호 201-81-21515" },
  { contentText: "(주)스타벅스 코리아 대표이사 이석구)" },
  { contentText: "TEL : 02) 3015-110 / FAX : 02) 3015-1106" },
  { contentText: "개인정보 책임자 : 강기원" },
];
const Footer = () => {
  return (
    <Container container={cx("footer")} inner={cx("inner")}>
      <ul className={cx("menu")}>
        {menuList.map((item, i) => (
          <li key={i} className={cx(item.className)}>
            <Link
              className={cx(item.className)}
              to={item.to ? item.to : "#"}
            >
              {item.contentText}
            </Link>
          </li>
        ))}
      </ul>
      <div className={cx("btn-group")}>
        <Button1 type="white">찾아오시는 길</Button1>
        <Button1 type="white">신규입점제의</Button1>
        <Button1 type="white">사이트 맵</Button1>
      </div>
      <div className={cx("inof")}>
        {infoList.map((info, i) => (
          <span key={i}>{info.contentText}</span>
        ))}
      </div>
      <div className={cx("copyright")}>
        &copy;{" "}
        <span className={cx("this-year")}>
          {new Date().getFullYear()} Starbucks Coffe Company. All Rights Resrved.
        </span>
        <img className={cx('logo')} src={LogoOnlyText} alt="logo" />
      </div>
    </Container>
  );
}

export default Footer