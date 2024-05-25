import React, { useEffect, useRef } from 'react'
import styles from '../../style/youtube.module.scss'
import classNames from 'classnames/bind'
import { getRandom } from '../../utils/customMath'
import { gsap } from 'gsap'

import floating1 from "../../src_assets/floating1.png";
import floating2 from "../../src_assets/floating2.png";
import floating3 from "../../src_assets/floating3.png";
import Container from '../layout/Container'

const cx = classNames.bind(styles)

const Floating = () => {
  const floating1Ref = useRef<HTMLImageElement>(null);
  const floating2Ref = useRef<HTMLImageElement>(null);
  const floating3Ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const floatingList = [
      { el: floating1Ref.current, delay: 1, size: 15 },
      { el: floating2Ref.current, delay: 0.5, size: 15 },
      { el: floating3Ref.current, delay: 1.5, size: 20 },
    ];
    floatingList.forEach((floating) => {
      gsap.to(floating.el, {
        duration: getRandom(1.5,2.5),
        y: floating.size,
        repeat: -1, //무한반복
        yoyo: true, //한번 재생된 애니매이션을 되감기
        ease: "Power1.easeInOut", //자연스러운 애니메이션
        delay: getRandom(0,floating.delay), // 딜레이
      });
    })
  }, []);
  return (
    <Container
      container={cx("floating-container")}
      inner={cx("floating")}
    >
      <img ref={floating1Ref} className={cx("floating1")} src={floating1} alt="floating1" />
          <img ref={floating2Ref} className={cx("floating2")} src={floating2} alt="floating2" />
          <img ref={floating3Ref} className={cx("floating3")} src={floating3} alt="floating3" />
    </Container>
  )
}

export default Floating