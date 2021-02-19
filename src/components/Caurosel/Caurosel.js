import React, { useState } from "react";



const Caurosel = () => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <>
      {/* <div
        className="caurosel"
        style={{
          backgroundImage:
            "https://preprod-gemplex-assets.gemplex.tv/banner/images/banner-16-5/1603189591156.jpg",
        }}
        // `url(${images[currImg].img})`
      >
        <div className="left"></div>
        <div className="middle"></div>
        <div className="right"></div>
      </div> */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ marginTop: "65px" }}>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://preprod-gemplex-assets.gemplex.tv/banner/images/banner-16-5/1603189591156.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://preprod-gemplex-assets.gemplex.tv/banner/images/banner-16-5/1572866356305.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://preprod-gemplex-assets.gemplex.tv/banner/images/banner-16-5/1574941282459.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://preprod-gemplex-assets.gemplex.tv/banner/images/banner-16-5/1594634161522.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://preprod-gemplex-assets.gemplex.tv/banner/images/banner-16-5/1609849473961.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://preprod-gemplex-assets.gemplex.tv/banner/images/banner-16-5/1613464115489.jpg"
              alt="Third slide"
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Caurosel;
