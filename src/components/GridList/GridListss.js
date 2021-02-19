import React from "react";
import {
  GridList,
  IconButton,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import datalst from "./data.json";
import { Link } from "react-router-dom";

const GridListss = () => {
  return (
    <div>
      <GridList
        component={Link}
        to="/detailspage"
        cellHeight={200}
        cols={4}
        style={{ height: "400px", width: "100%", overflow: "hidden" }}
      >
        {datalst.map((data) => (
          <GridListTile
            key={data.id}
            cols={data.cols || 1}
            rows={data.rows || 1}
          >
            <img src={data.image} alt={data.title} />
            <GridListTileBar
              title={data.title}
              subtitle={data.desc}
              actionIcon={
                <IconButton>
                  <InfoIcon style={{ color: "White" }}></InfoIcon>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default GridListss;
