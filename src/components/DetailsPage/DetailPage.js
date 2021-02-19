import React from "react";
import Header from "../Header";
import Advertise from "../Advertise";
import Footer from "../Footer";
import Episodes from "./Episodes";
import Banner from "./Banner";

const DetailPage = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Episodes />
      <Advertise />
      <Footer></Footer>
    </div>
  );
};

export default DetailPage;
