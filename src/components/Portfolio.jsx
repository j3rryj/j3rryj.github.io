import React, { Component } from 'react';

let slideIndex = 0;

class Portfolio extends Component { 
  componentDidMount() {
    this.showSlides();
  }
  
  showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  }

  render() {
    return(
      <div className="portfolio-container">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="img1.jpg" style={{width:"100%"}} />
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="img2.jpg" style={{width:"100%"}} />
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="img3.jpg" style={{width:"100%"}} />
            <div className="text">Caption Three</div>
          </div>

          <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
          <a className="next" onClick="plusSlides(1)">&#10095;</a>
        </div>
        <br/>

        <div style={{textAlign: "center"}}>
          <span className="dot" onClick="currentSlide(1)"></span> 
          <span className="dot" onClick="currentSlide(2)"></span> 
          <span className="dot" onClick="currentSlide(3)"></span> 
        </div>
      </div>
    )
  }
}

export default Portfolio;