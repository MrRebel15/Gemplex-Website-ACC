import React from "react";
import Header from "../components/Header";
import Caurosel from "../components/Caurosel/Caurosel";
import GridList from "../components/GridList/GridListss";
import OriginalCaurosel from "../components/OriginalCaurosel";
import Music from "../components/Music";
import Footer from "../components/Footer";
import Languages from "../components/Languages";
import Advertise from "../components/Advertise";

const HomePageMain = () => {
  return (
    <div>
      <Header />
      <Caurosel />
      <GridList />
      <OriginalCaurosel />
      <Music />
      <Advertise />
      <Languages />
      <Footer />
    </div>
  );
};

export default HomePageMain;
