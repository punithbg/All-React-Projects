import React from "react";
import "./CarouselImages.css";
import img1 from "../../images/carousel/banner1.jpg";
import img2 from "../../images/carousel/banner2.jpg";
import img3 from "../../images/carousel/banner3.jpg";
import img4 from "../../images/carousel/banner4.jpg";
import img5 from "../../images/carousel/banner5.jpg";
import img6 from "../../images/carousel/banner6.jpg";

const CarouselImages = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
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
      </div>
      <button
        className="carousel-control-prev prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next next"
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
