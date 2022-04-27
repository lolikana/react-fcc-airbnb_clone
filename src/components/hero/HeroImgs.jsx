import React from 'react'
import HeroImg1 from './../../images/Airbnb Experiences/image01.png';
import HeroImg2 from './../../images/Airbnb Experiences/image02.png';
import HeroImg3 from './../../images/Airbnb Experiences/image03.png';
import HeroImg4 from './../../images/Airbnb Experiences/image04.png';
import HeroImg5 from './../../images/Airbnb Experiences/image05.png';
import HeroImg6 from './../../images/Airbnb Experiences/image06.png';
import HeroImg7 from './../../images/Airbnb Experiences/image07.png';
import HeroImg8 from './../../images/Airbnb Experiences/image08.png';
import HeroImg9 from './../../images/Airbnb Experiences/image09.png';

const heroImgDatas = [
  {
    id: 1,
    image: HeroImg1,
  },
  {
    id: 2,
    image: HeroImg2,
  },
  {
    id: 3,
    image: HeroImg3,
  },
  {
    id: 4,
    image: HeroImg4,
  },
  {
    id: 5,
    image: HeroImg5,
  },
  {
    id: 6,
    image: HeroImg6,
  },
  {
    id: 7,
    image: HeroImg7,
  },
  {
    id: 8,
    image: HeroImg8,
  },
  {
    id: 9,
    image: HeroImg9,
  },
];

const HeroImgs = () => {
  return (
    <div className="hero-imgs">
    {heroImgDatas.map((heroImgData) => {
      return (
        <div key={heroImgData.id} className="hero-img">
          <img src={heroImgData.image} alt="" />
        </div>
      );
    })}
  </div>
  )
}

export default HeroImgs