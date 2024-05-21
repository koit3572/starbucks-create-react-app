import { useEffect, useRef } from 'react'
import badge1 from "../../src_assets/badge1.jpg"
import badge2 from "../../src_assets/badge2.jpg";
import badge3 from "../../src_assets/badge3.jpg";
import classNames from "classnames/bind"
import styles from "../../style/navbar.module.scss"
import useThrottle from '../../hooks/useThrottle';
import { gsap } from 'gsap';
const cx = classNames.bind(styles)

const Badges = () => {
  const badgesContainerRef = useRef<HTMLDivElement>(null);
  const listener = () => {
    if (window.scrollY > 500) {
      gsap.to(badgesContainerRef.current!,{
        duration: 0.6,
        opacity: 0,
        display:"none",
      });
    } else {
      gsap.to(badgesContainerRef.current!, {
        duration: 0.6,
        opacity: 1,
        display: "block",
      });
    }
  };
  const throttleListener = useThrottle(listener,300)
  useEffect(() => {
    window.addEventListener("scroll", throttleListener);
    return () => window.removeEventListener("scroll", throttleListener);
  }, []);
  return (
    <div ref={badgesContainerRef}>
      <div className={cx("badge")}>
        <img src={badge1} alt="badge1" />
      </div>
      <div className={cx("badge")}>
        <img src={badge2} alt="badge2" />
      </div>
    </div>
  );
}

export default Badges