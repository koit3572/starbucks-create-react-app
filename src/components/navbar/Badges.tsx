import { useEffect, useRef } from 'react'
import badge1 from "../../src_assets/badge1.jpg"
import badge2 from "../../src_assets/badge2.jpg";
import classNames from "classnames/bind"
import styles from "../../style/navbar.module.scss"
import useThrottle from '../../hooks/useThrottle';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { FaArrowUp } from "react-icons/fa";

const cx = classNames.bind(styles)

gsap.registerPlugin(ScrollToPlugin)

const Badges = () => {
  const badgesContainerRef = useRef<HTMLDivElement>(null);
  const scrollToRef = useRef<HTMLDivElement>(null);
  const listener = () => {
    if (window.scrollY > 500) {
      gsap.to(badgesContainerRef.current!,{
        duration: 0.6,
        opacity: 0,
        display:"none",
      });
      gsap.to(scrollToRef.current!, {
        duration: 0.6,
        translateX: '-12rem'
      });
    } else {
      gsap.to(badgesContainerRef.current!, {
        duration: 0.6,
        opacity: 1,
        display: "block",
      });
      gsap.to(scrollToRef.current!, {
        duration: 0.6,
        translateX: "0rem",
      });
    }
  };
  const throttleListener = useThrottle(listener, 300)
  const handleScrollToClick = () => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: 0
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", throttleListener);
    return () => window.removeEventListener("scroll", throttleListener);
  }, []);
  return (
    <>
      <div ref={badgesContainerRef}>
        <div className={cx("badge")}>
          <img src={badge1} alt="badge1" />
        </div>
        <div className={cx("badge")}>
          <img src={badge2} alt="badge2" />
        </div>
      </div>
      <div onClick={handleScrollToClick} className={cx("scroll-to")} ref={scrollToRef}>
        <FaArrowUp />
      </div>
    </>
  );
}

export default Badges