import React from 'react'
import styles from "../../style/reserveCoffee.module.scss"
import classNames from 'classnames/bind'

import reserveLogo from '../../src_assets/reserve_logo.png'
import reserveText from '../../src_assets/reserve_text.png'
import reserveImage from '../../src_assets/reserve_image.png'

import Button1 from "../customElement/Button1";
import Container from '../layout/Container'
const cx = classNames.bind(styles)
const ReserveCoffee = () => {
  return (
    <Container
      container={cx("reserve-coffee")}
      inner={cx("inner")}
    >
      <img className={`${cx('reserve-logo')} back-to-position to-right delay-0`} src={reserveLogo} alt="reserve logo" />
        <div className={cx('text-group')}>
          <img className={`${cx('description')} back-to-position to-right delay-1`} src={reserveText} alt="reserve text" />
          <div className={`${cx('more')} back-to-position to-right delay-2`}>
            <Button1 type="gold">자세히 보기</Button1>
          </div>
        </div>
        <img className={`${cx('product')} back-to-position to-left delay-3`} src={reserveImage} alt="reserve img" />
    </Container>
  );
};

export default ReserveCoffee;