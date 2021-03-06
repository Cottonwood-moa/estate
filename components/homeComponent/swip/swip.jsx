import styles from './swip.module.scss';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import useWindowDimensions from '../../../swr/useGetWindow';
import { useEffect, useState } from 'react';
const Swip = () => {
  // 창 크기에 따른 슬라이드 숫자
  const window = useWindowDimensions();
  const [slidesToshow, setSlidesToShow] = useState(4);
  useEffect(() => {
    if (window.width >= 1400) {
      setSlidesToShow(6);
    }
    if (window.width < 1400) {
      setSlidesToShow(5);
    }
    if (window.width < 1200) {
      setSlidesToShow(4);
    }
    if (window.width < 1000) {
      setSlidesToShow(3);
    }
    if (window.width < 800) {
      setSlidesToShow(2);
    }
  }, [window.width]);
  // 슬라이드 세팅
  // https://react-slick.neostack.com/docs/example
  const settings = {
    infinite: true,
    slidesToShow: slidesToshow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    cssEase: 'cubic-bezier(0.85, 0, 0.15, 1)',
    arrows: false,
  };
  // SWR get data 로직 필요
  // =====
  return (
    <div className={styles.container}>
      <div className={styles.swip}>
        {/* 나중에 부동산 정보를 받아와서 loop로 돌려야 함. */}
        <Slider {...settings}>
          <div className={styles.test}>
            <div className={styles.article}>1</div>
          </div>
          <div className={styles.test}>
            <div className={styles.article}>2</div>
          </div>
          <div className={styles.test}>
            <div className={styles.article}>3</div>
          </div>
          <div className={styles.test}>
            <div className={styles.article}>4</div>
          </div>
          <div className={styles.test}>
            <div className={styles.article}>5</div>
          </div>
          <div className={styles.test}>
            <div className={styles.article}>6</div>
          </div>
          <div className={styles.test}>
            <div className={styles.article}>7</div>
          </div>
          <div className={styles.test}>
            <div className={styles.article}>8</div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Swip;
