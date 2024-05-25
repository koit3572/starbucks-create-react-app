import React from 'react'
import styles from "../../style/rewards.module.scss"
import classNames from 'classnames/bind'
import Button1 from '../customElement/Button1'
const cx = classNames.bind(styles)
const Rewards = () => {
  return (
    <div className={`${cx('rewards')} container`}>
      <div className={cx("bg-left")} />
      <div className={cx("bg-right")} />
      <div className={`${cx('inner')} inner`}>
        <div className={cx('btn-group')}>
          <Button1 className={cx('btn-register')} type={'reverse'}>회원가입</Button1>
          <Button1 className={cx('btn-sign-in')}>로그인</Button1>
          <Button1 className={cx('btn-gift')}>e-Gift 선물하기</Button1>
        </div>
      </div>
    </div>
  );
}

export default Rewards