import React from 'react'
import Container from '../layout/Container'
import styles from '../../style/reserveStore.module.scss'
import classNames from 'classnames/bind'

import front from '../../src_assets/reserve_store_medal_front.png'
import back from '../../src_assets/reserve_store_medal_back.png'

import Button1 from '../customElement/Button1'
const cx=classNames.bind(styles)

const ReserveStore = () => {
  return (
    <Container container={cx("reserve-store")} inner={cx("inner")}>
      <div className={cx("medal")}>
        <div className={cx("medal", "front")}>
          <img src={front} alt="front" />
        </div>
        <div className={cx("medal", "back")}>
          <img src={back} alt="back" />
          <Button1 className={cx('btn')}>매장안내</Button1>
        </div>
      </div>
    </Container>
  );
}

export default ReserveStore