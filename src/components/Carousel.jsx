import React, { Component } from 'react'
import Slider from 'react-slick';

export default class Carousel extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      dotsClass: 'slick-dots',
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }]
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/1.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/2.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/3.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/4.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/5.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/6.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/7.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/8.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/9.png'}/></div>
          <div className="carousel-container"><img className="carousel-pic" src={'../../public/10.png'}/></div>
        </Slider>
      </div>
    );
  }
};