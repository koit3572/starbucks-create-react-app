import React from 'react'
import styles from '../../style/seasonProduct.module.scss'
import classNames from "classnames/bind"

import seasonProductImage from "../../src_assets/season_product_image.png"
import seasonText1 from '../../src_assets/season_product_text1.png'
import seasonText2 from "../../src_assets/season_product_text2.png";
import Button1 from '../customElement/Button1'
import Container from '../layout/Container'

const cx = classNames.bind(styles)
const SeasonProduct = () => {
  return (
    <Container container={cx("season-product")} inner={cx("inner")}>
      <img
        className="back-to-position to-right delay-0"
        src={seasonProductImage}
        alt="season-product"
      />
      <div className={cx("text-group")}>
        <img
          className={`${cx("title")} back-to-position to-left delay-1`}
          src={seasonText1}
          alt="seasonText1"
        />
        <img
          className={`${cx("description")} back-to-position to-left delay-2`}
          src={seasonText2}
          alt="seasonText2"
        />
        <div className={`${cx("more")} back-to-position to-left delay-3`}>
          <Button1>자세히 보기</Button1>
        </div>
      </div>
    </Container>
  );
}

export default SeasonProduct