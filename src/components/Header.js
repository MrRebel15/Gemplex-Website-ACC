import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Switch,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div>
      <Container>
        <AppBar style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography variant="h6" style={{ color: "black" }}>
              <img
                src="https://preprod-gemplex-assets.gemplex.tv/general/gemeplex_logo_black.png"
                height="35px"
                width="80px"
                marginRight="10px"
              />
            </Typography>
            <Box style={{ flexGrow: 1 }}>
              <Button style={{ textTransform: "capitalize" }}>Originals</Button>
              <Button style={{ textTransform: "capitalize" }}>Movies</Button>
              <Button style={{ textTransform: "capitalize" }}>Videos</Button>
              <Button style={{ textTransform: "capitalize" }}>Music</Button>
              <Button style={{ textTransform: "capitalize" }}>Hype</Button>
            </Box>
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <Typography style={{ color: "black", fontSize: "13px" }}>
              Light
            </Typography>
            <Switch size="small" color="primary"></Switch>
            <Typography style={{ color: "black", fontSize: "13px" }}>
              Dark
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
};

export default Header;
