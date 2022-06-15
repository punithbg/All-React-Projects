import React from "react";
import "./CarouselImages.css";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../images/carousel-images/image1.webp";
import img2 from "../images/carousel-images/image2.webp";
import img3 from "../images/carousel-images/image3.webp";
import img4 from "../images/carousel-images/image4.webp";
import img5 from "../images/carousel-images/image5.webp";
import img6 from "../images/carousel-images/image6.webp";
import img7 from "../images/carousel-images/image7.webp";
import img8 from "../images/carousel-images/image8.webp";
import img9 from "../images/carousel-images/image9.webp";
import img10 from "../images/carousel-images/image10.webp";
import img11 from "../images/carousel-images/image11.webp";

const CarouselImages = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img6} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img7} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img8} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img9} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img10} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img11} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselImages;
