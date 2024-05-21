import classNames from 'classnames/bind'
import styles from '../../style/visual.module.scss'
import visualTitleImg from "../../src_assets/visual_title.png";
import visualCup1Img from '../../src_assets/visual_cup1.png'
import visualCup1TextImg from '../../src_assets/visual_cup1_text.png'
import visualCup2Img from '../../src_assets/visual_cup2.png'
import visualCup2TextImg from '../../src_assets/visual_cup2_text.png'
import visualSpoonImg from '../../src_assets/visual_spoon.png'
import Button1 from '../customElement/Button1';
import { useEffect } from 'react';
import { gsap } from 'gsap';
interface IVisualImage {
  className?: string;
  src: string;
  alt: string;
}
const cx = classNames.bind(styles);

const visualTitleImage: IVisualImage = {
  src: visualTitleImg,
  alt: "STARBUCKS DELIGHTFUL START TO THE YEARS",
};
const visualImages: IVisualImage[][] = [
  [
    {
      className: cx("visual__cup1"),
      src: visualCup1Img,
      alt: "new OATMEAL LATTE",
    },
    {
      className: cx("visual__cup1-text"),
      src: visualCup1TextImg,
      alt: "오트밀 라떼",
    },
  ],
  [
    {
      className: cx("visual__cup2"),
      src: visualCup2Img,
      alt: "new STARBUCKS CARAMEL CRUMBLE MOCHA",
    },
    {
      className: cx("visual__cup2-text"),
      src: visualCup2TextImg,
      alt: "스타벅스 카라멜 크럼블 모카",
    },
  ],
  [
    {
      className: cx("visual__spoon"),
      src: visualSpoonImg,
      alt: "Spoon",
    },
  ],
];

const Visual = () => {
  const VisualImage = ({ data }: { data:IVisualImage }) => (
    <img className={data.className} src={data.src} alt={data.alt} />
  );
  useEffect(() => {
    const fadeEls = document.getElementsByClassName(cx('fade-in'));
    Object.keys(fadeEls).map((fadeEl,i) => {
      gsap.to(fadeEls[Number(fadeEl)], {
        duration: 1,
        delay: 0.7 * (i+1),
        opacity: 1,
      });
    })
  },[])
  return (
    <div className={cx("visual")}>
      <div className={cx("inner")}>
        <div className={cx('title', 'fade-in')}>
          <VisualImage data={visualTitleImage} />
          <Button1 type={"brown"}>자세히 보기</Button1>
        </div>
        {visualImages.map((images, i) => (
          <div key={i} className={cx('fade-in')}>
            {images.map((image, i) => (
              <VisualImage key={i} data={image} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visual