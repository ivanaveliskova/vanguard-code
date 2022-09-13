import React from "react";

import Heading1 from "./components/Heading1/Heading1";
import MainHeader from "./MainHeader/MainHeader";

import HeaderImage from "./assets/man_chart.png";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <MainHeader />
      <div className="App__main">
        {/* This would normally be a component that could be replaced. Potentially with react-router */}
        <Heading1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading1>
        <div>
          <img src={HeaderImage} />
        </div>
      </div>
      <div>FOOTER SEARCH BAR</div>
    </div>
  );
};

export default App;
