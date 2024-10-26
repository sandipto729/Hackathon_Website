import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
import img1 from './../../assets/hackathon-slide1.png'
import img2 from './../../assets/hackathon-theme-slide1.png'
import img3 from './../../assets/images.png'
import img4 from './../../assets/istockphoto-1306326254-612x612.jpg'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Image 1" className={styles.image} />
        </div>
        <div>
          <img src={img2} alt="Image 2" className={styles.image} />
        </div>
        <div>
          <img src={img3} alt="Image 3" className={styles.image} />
        </div>
        <div>
          <img src={img4} alt="Image 4" className={styles.image} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
