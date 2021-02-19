import React from "react";
import { Grid } from "@material-ui/core";
import { Height } from "@material-ui/icons";

const Languages = () => {
  return (
    <>
      <div style={{ margin: "12px" }}>
        <h4>Languages</h4>
        <Grid container spacing={2}>
          <Grid item>
            <h1
              lg={3}
              style={{
                backgroundColor: "#1b70a8",
                borderRadius: "100%",
                height: "95px",
                width: "95px",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              आ
            </h1>
            <p>Hindi</p>
          </Grid>
          <Grid item>
            <h1
              lg={3}
              style={{
                backgroundColor: "#1b70a8",
                borderRadius: "100%",
                height: "95px",
                width: "95px",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              ক
            </h1>
            <p>Bangla</p>
          </Grid>
          <Grid item>
            <h1
              lg={3}
              style={{
                backgroundColor: "#1b70a8",
                borderRadius: "100%",
                height: "95px",
                width: "95px",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              ಎ
            </h1>
            <p>Kannad</p>
          </Grid>
          <Grid item>
            <h1
              lg={3}
              style={{
                backgroundColor: "#1b70a8",
                borderRadius: "100%",
                height: "95px",
                width: "95px",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              अ
            </h1>
            <p>Marathi</p>
          </Grid>
          <Grid item>
            <h1
              lg={3}
              style={{
                backgroundColor: "#1b70a8",
                borderRadius: "100%",
                height: "95px",
                width: "95px",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              ਏ
            </h1>
            <p>Punjabi</p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Languages;
