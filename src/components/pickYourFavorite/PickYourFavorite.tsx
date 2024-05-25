import React from 'react'
import styles from '../../style/pickYourFavorite.module.scss'
import classNames from 'classnames/bind'

import favorite1 from "../../src_assets/favorite_text1.png"
import favorite2 from "../../src_assets/favorite_text2.png";
import Button1 from '../customElement/Button1';
import Container from '../layout/Container';
const cx = classNames.bind(styles);

const PickYourFavorite = () => {
  return (
    <Container 
      container={cx("pick-your-favorite")}
      inner={cx("inner")}
    >
      <div className={cx("text-group")}>
          <img className={`${cx("title")} back-to-position to-right delay-0`} src={favorite1} alt="favorite1" />
          <img className={`${cx("discription")} back-to-position to-right delay-1`} src={favorite2} alt="favorite2" />
          <div className={`${cx("more")} back-to-position to-right delay-2`}>
            <Button1 type="white">자세히 보기</Button1>
          </div>
        </div>
    </Container>
  );
}

export default PickYourFavorite