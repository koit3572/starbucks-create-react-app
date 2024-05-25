import Container from '../layout/Container'
import styles from '../../style/awards.module.scss'
import classNames from 'classnames/bind'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";

import slide1 from '../../src_assets/awards_slide1.jpg'
import slide2 from "../../src_assets/awards_slide2.jpg";
import slide3 from "../../src_assets/awards_slide3.jpg";
import slide4 from "../../src_assets/awards_slide4.jpg";
import slide5 from "../../src_assets/awards_slide5.jpg";
import slide6 from "../../src_assets/awards_slide6.jpg";
import slide7 from "../../src_assets/awards_slide7.jpg";
import slide8 from "../../src_assets/awards_slide8.jpg";
import slide9 from "../../src_assets/awards_slide9.jpg";
import slide10 from "../../src_assets/awards_slide10.jpg";
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

const cx = classNames.bind(styles)

const awardsSwiperSlideDataList = [
  { src: slide1, alt: "slide1" },
  { src: slide2, alt: "slide1" },
  { src: slide3, alt: "slide1" },
  { src: slide4, alt: "slide1" },
  { src: slide5, alt: "slide1" },
  { src: slide6, alt: "slide1" },
  { src: slide7, alt: "slide1" },
  { src: slide8, alt: "slide1" },
  { src: slide9, alt: "slide1" },
  { src: slide10, alt: "slide1" },

];
const Awards = () => {
  return (
    <Container container={cx("awards")} inner={cx("inner")}>
      <Swiper
        className={cx("awards-swiper")}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={32}
        slidesPerView={5}
        navigation={{
          prevEl: `.${cx("swiper-button-prev")}`,
          nextEl: `.${cx("swiper-button-next")}`,
        }}
      >
        {awardsSwiperSlideDataList.map((slideData, i) => (
          <SwiperSlide key={i}>
            <img src={slideData.src} alt={slideData.alt} />
          </SwiperSlide>
        ))}
        <div className={`swiper-button-prev ${cx("swiper-button-prev")}`}>
          <div className={cx("swiper-button__border")}>
            <HiArrowLeft />
          </div>
        </div>
        <div className={`swiper-button-next ${cx("swiper-button-next")}`}>
          <div className={cx("swiper-button__border")}>
            <HiArrowRight />
          </div>
        </div>
      </Swiper>
    </Container>
  );
}

export default Awards