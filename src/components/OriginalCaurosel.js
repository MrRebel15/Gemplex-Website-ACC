import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 10, itemsToShow: 4 },
  { width: 768, itemsToShow: 5 },
  { width: 10, itemsToShow: 6 },
];

const OriginalCaurosel = () => {
  return (
    <>
      <div style={{ marginLeft: "40px", marginTop: "15px" }}>
        <h1>Originals</h1>
      </div>
      <h6 style={{ marginLeft: "40px", marginTop: "15px", color: "#1b70a8" }}>
        Series
      </h6>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <a href="/detailspage">
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
                height="220px"
              />
            </a>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "#1b70a8",
                borderRadius: "50px",
              }}
            >
              Sheperds From Hell
            </h6>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              2021 | 2hr 0 min
            </p>
          </Item>
          <Item>
            <a href="/detailspage">
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1589452551578.jpg"
                height="220px"
              />
            </a>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "#1b70a8",
                borderRadius: "50px",
              }}
            >
              ............Mastar
            </h6>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              .................2021 | 2hr 0 min
            </p>
          </Item>
          <Item>
            <a href="/detailspage">
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1599300172915.jpg"
                height="220px"
              />
            </a>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "#1b70a8",
                borderRadius: "50px",
              }}
            >
              Khushfemiya
            </h6>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              2021 | 2hr 0 min
            </p>
          </Item>
          <Item>
            <a href="/detailspage">
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1599299973961.jpg"
                height="220px"
              />
            </a>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "#1b70a8",
                borderRadius: "50px",
              }}
            >
              ............CourtYard 704
            </h6>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              .................2021 | 2hr 0 min
            </p>
          </Item>
          <Item>
            <a href="/detailspage">
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1609850264606.jpg"
                height="220px"
              />
            </a>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "Blue",
                borderRadius: "50px",
              }}
            >
              ............Z43
            </h6>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              ................2021 | 2hr 0 min
            </p>
          </Item>
          <Item>
            <a href="/detailspage">
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
                height="220px"
              />
            </a>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "#1b70a8",
                borderRadius: "50px",
              }}
            >
              Sheperds From Hell
            </h6>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              2021 | 2hr 0 min
            </p>
          </Item>
          <Item>
            <a href="/detailspage">
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
                height="220px"
              />
            </a>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "#1b70a8",
                borderRadius: "50px",
              }}
            >
              Sheperds From Hell
            </h6>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              2021 | 2hr 0 min
            </p>
          </Item>
          <Item>
            <a href="/detailspage">
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
                height="220px"
              />
            </a>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "#1b70a8",
                borderRadius: "50px",
              }}
            >
              Sheperds From Hell
            </h6>
            <p style={{ textAlign: "left", fontSize: "12px" }}>
              2021 | 2hr 0 min
            </p>
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default OriginalCaurosel;
