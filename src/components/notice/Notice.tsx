import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "../../style/notice.module.scss";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import Button1 from "../customElement/Button1";

import { MdUpload } from "react-icons/md";
import { HiArrowLeft,HiArrowRight } from "react-icons/hi";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import promotion1 from "../../src_assets/promotion_slide1.jpg";
import promotion2 from "../../src_assets/promotion_slide2.jpg";
import promotion3 from "../../src_assets/promotion_slide3.jpg";
import promotion4 from "../../src_assets/promotion_slide4.jpg";
import promotion5 from "../../src_assets/promotion_slide5.jpg";

type DirectionType = "vertical" | "horizontal" | undefined;
interface INoticeSwiperList {
  texture: string;
  href?: string;
}
interface IPromotionSwiperList {
  src: string;
  alt: string;
}

const cx = classNames.bind(styles);
const noticeSwiperList: INoticeSwiperList[] = [
  { texture: "크리스마스 & 연말연시 스타벅스 매장 영업시간" },
  { texture: "[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트" },
  { texture: "스타벅스커피 코리아 애플리케이션 버전 업데이트 안내" },
  { texture: "[당첨자 발표] 뉴이어 전자영수증 이벤트" },
];
const promotionSwiperlist: IPromotionSwiperList[] = [
  {
    src: promotion1,
    alt: "2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!",
  },
  {
    src: promotion2,
    alt: "기간 내 스타벅스 카드 e-Gift를 3만원 이상 선물 시, 아메리카노 e-쿠폰을 드립니다.",
  },
  {
    src: promotion3,
    alt: "뉴이어 푸드와 제조 음료를 세트로 구매 시, 뉴이어 음료 BOGO(1+1)쿠폰을 드립니다.",
  },
  {
    src: promotion4,
    alt: "신념 MD상품 포함 3만원 이상 구매 고객께 아메리카노(톨사이즈)쿠폰을 드립니다.",
  },
  {
    src: promotion5,
    alt: "2017 DIGITAL LUCKY DRAW 100% 당첨의 행운을 드립니다!",
  },
];

const Notice = () => {
  const PromotionRef = useRef<HTMLDivElement>(null);
  const PromotionPrevRef = useRef<HTMLDivElement>(null);
  const PromotionNextRef = useRef<HTMLDivElement>(null);
  const PromotionPaginationRef = useRef<HTMLDivElement>(null);
  const [_, setIsLoding] = useState<boolean>(false);
  const [isToggle, setIsToggle] = useState<boolean>(true);
  const handleToggle = () => {
    !isToggle
      ? PromotionRef.current?.classList.remove(cx("promotion--hide"))
      : PromotionRef.current?.classList.add(cx("promotion--hide"));
    setIsToggle(!isToggle)
  }
  useEffect(() => {
    setIsLoding(true);
  }, []);
  return (
    <div>
      <div className={cx("notice")}>
        <div className={cx("notice-left-bg")} />
        <div className={cx("notice-right-bg")} />
        <div className={`${cx("inner")} inner`}>
          <div className={cx("inner__left")}>
            <h2>공지사항</h2>
            <Swiper
              className={cx("notice-swiper")}
              modules={[Autoplay]}
              direction={"vertical" as DirectionType}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
            >
              {noticeSwiperList.map((noticeSwiper, i) => (
                <SwiperSlide className={cx("notice-swiper-slide")} key={i}>
                  <Link to={noticeSwiper.href ? noticeSwiper.href : "#"}>
                    {noticeSwiper.texture}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <Link className={cx("notice-line__more")} to={"#"}>
              <FaCirclePlus color={"#fff"} />
            </Link>
          </div>
          <div className={cx("inner__right")}>
            <h2>스타벅스 프로모션</h2>
            <div className={cx("toggle-promotion")} onClick={handleToggle}>
              <MdUpload />
            </div>
          </div>
        </div>
      </div>
      <div ref={PromotionRef} className={cx("promotion")}>
        <Swiper
          className={cx("promotion-swiper")}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={32}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: PromotionPrevRef.current,
            nextEl: PromotionNextRef.current,
          }}
          pagination={{
            el: PromotionPaginationRef.current,
            clickable: true,
            dynamicMainBullets: 5,
            bulletClass: `swiper-pagination-bullet ${cx(
              "swiper-pagination-bullet"
            )}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${cx(
              "swiper-pagination-bullet-active"
            )}`,
          }}
        >
          {promotionSwiperlist.map((promotionSwiper, i) => (
            <SwiperSlide
              key={i}
              className={cx("promotion-swiper__swiper-slide")}
            >
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? cx("swiper-slide-container", "container__active")
                      : cx("swiper-slide-container")
                  }
                >
                  <img src={promotionSwiper.src} alt={promotionSwiper.alt} />
                  <div className={cx("swiper-slide__link-container")}>
                    <Button1>자세히 보기</Button1>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          <div
            ref={PromotionPaginationRef}
            className={`swiper-pagination ${cx("swiper-pagination")}`}
          >
            {promotionSwiperlist.map((_, i) => (
              <span
                key={i}
                className={`swiper-pagination-bullet ${cx(
                  "swiper-pagination-bullet"
                )}`}
              ></span>
            ))}
          </div>
          <div
            ref={PromotionPrevRef}
            className={`swiper-button-prev ${cx("swiper-button-prev")}`}
          >
            <div className={cx("swiper-button__border")}>
              <HiArrowLeft />
            </div>
          </div>
          <div
            ref={PromotionNextRef}
            className={`swiper-button-next ${cx("swiper-button-next")}`}
          >
            <div className={cx("swiper-button__border")}>
              <HiArrowRight />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Notice;
