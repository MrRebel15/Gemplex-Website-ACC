import React from "react";
import "./Footer.css";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>gemplex</h4>
            <h1 className="list-unstyled">
              <li>Subscription</li>
              <li>About</li>
              <li>FeedBack</li>
              <li>Support</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Avialable</h4>
            <ui className="list-unstyled">
              <li>
                <img
                  src="https://www.gemplex.tv/static/media/playstore grey.015f6636.svg"
                  heigh="120px"
                  width="115px"
                />
              </li>
              <li>
                <img
                  src="https://preprod-gemplex-assets.gemplex.tv/general/app%20store%20grey-07.svg"
                  heigh="120px"
                  width="115px"
                />
              </li>
              <li>
                {" "}
                <img
                  src="https://preprod-gemplex-assets.gemplex.tv/general/roku.svg"
                  heigh="120px"
                  width="115px"
                />
              </li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social Media Sites</h4>
            <ui className="list-unstyled">
              <li>Facebook </li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Gemplex MEMES | All rights reserved
            | Terms Of Service | Privacy
          </p>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default Footer;
