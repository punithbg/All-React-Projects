import { Carousel } from "bootstrap";
import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";

const CarouselImages = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
      </ol>
      <div class="carousel-inner caro">
        <div class="carousel-item active">
          <img class="d-block w-100 " src={img1} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img2} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img3} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img4} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img5} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img6} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img7} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img8} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img9} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 " src={img10} alt="Third slide" />
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default CarouselImages;
