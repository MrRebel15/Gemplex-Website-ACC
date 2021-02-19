import React from "react";
import "./App.css";
import HomePageMain from "./components/HomePageMain";
import DetailPage from "./components/DetailsPage/DetailPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={HomePageMain} />
          <Route exact path="/detailspage" component={DetailPage} />
        </switch>
      </BrowserRouter>
    </>
  );
}

export default App;
