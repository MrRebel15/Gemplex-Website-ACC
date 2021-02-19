import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

const Banner = () => {
  return (
    <>
      <div>
        <Grid
          container
          spacing={2}
          style={{
            height: "350px",
            marginTop: "65px",
            backgroundColor: "rgb(0,0,0,0.9)",
          }}
        >
          <Grid item md={6}>
            <Typography
              style={{ marginLeft: "15px", color: "white" }}
              variant="h4"
            >
              Sheperd From Hell
            </Typography>
            <Typography style={{ marginLeft: "15px", color: "white" }}>
              2 hr 42 min 2020 18+
            </Typography>
            <br />
            <Button
              style={{ marginLeft: "15px" }}
              color="primary"
              variant="contained"
            >
              Watch Trailer
            </Button>
            <br />
            <Typography
              style={{ fontSize: "10px", marginLeft: "15px", color: "white" }}
            >
              By playing a video, you agree to our Terms of Use
            </Typography>
            <br />
            <Typography style={{ marginLeft: "15px", color: "white" }}>
              In the city of Kochi, Kerala people are terrified when a kidnapper
              demands unusual ransom from the public to terminate a doctor and a
              principal to rescue the victim.
            </Typography>
            <br />

            <Typography style={{ marginLeft: "15px", color: "white" }}>
              Director :- Aseef Ameen
            </Typography>
            <Typography style={{ marginLeft: "15px", color: "white" }}>
              Starring :- Vivek Anirudh Devaki Rajendran Mohan Arjun Sashi
              Jeevan Jos
            </Typography>
            <Typography style={{ marginLeft: "15px", color: "white" }}>
              Genres :- Thriller , Crime
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img
              src="https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1609850285639.jpg"
              height="340px"
              width="600px"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Banner;
