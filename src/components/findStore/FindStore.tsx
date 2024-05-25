import React from 'react'
import Container from '../layout/Container'
import styles from "../../style/findStore.module.scss"
import classNames from 'classnames/bind'

import texture1 from '../../src_assets/find_store_texture1.png'
import texture2 from "../../src_assets/find_store_texture2.png";
import picture1 from '../../src_assets/find_store_picture1.jpg'
import picture2 from "../../src_assets/find_store_picture2.jpg";
import text1 from '../../src_assets/find_store_text1.png'
import text2 from "../../src_assets/find_store_text2.png";
import Button1 from '../customElement/Button1'
const cx = classNames.bind(styles)
const FindStore = () => {
  return (
    <Container container={cx("find-store")} inner={cx("inner")}>
      <img className={cx("texture1")} src={texture1} alt="texture1" />
      <img className={cx("texture2")} src={texture2} alt="texture2" />
      <img className={`${cx("picture","picture1")} back-to-position to-right delay-0`} src={picture1} alt="picture1" />
      <img className={`${cx("picture","picture2")} back-to-position to-right delay-1`} src={picture2} alt="picture2" />
      <div className={cx("text-group")}>
        <img className={`${cx("title")} back-to-position to-left delay-0`} src={text1} alt="title" />
        <img className={`${cx("discription")} back-to-position to-left delay-1`} src={text2} alt="discription" />
        <div className={`${cx("more")} back-to-position to-left delay-2`}>
          <Button1>매장찾기</Button1>
        </div>
      </div>
    </Container>
  );
}

export default FindStore