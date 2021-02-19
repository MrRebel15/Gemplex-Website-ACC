import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../Item";
import "../style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 10, itemsToShow: 4 },
  { width: 768, itemsToShow: 5 },
  { width: 10, itemsToShow: 6 },
];

const Episodes = () => {
  return (
    <>
      <div style={{ marginLeft: "40px", marginTop: "40px" }}>
        <h3>Season 1</h3>
        <p>Episode(8)</p>
      </div>
      <hr />
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="220px"
            />
            <p>Episode 1</p>
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
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="220px"
            />
            <p>Episode 2</p>
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
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="220px"
            />
            <p>Episode 3</p>
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
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="220px"
            />
            <p>Episode 4</p>
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
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="220px"
            />
            <p>Episode 5</p>
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "Blue",
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
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="220px"
            />
            <p>Episode 6</p>
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
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="220px"
            />
            <p>Episode 7</p>
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
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="220px"
            />
            <h6
              style={{
                textAlign: "left",
                marginTop: "5px",
                color: "#1b70a8",
                borderRadius: "50px",
              }}
            >
              Episode 2
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

export default Episodes;
