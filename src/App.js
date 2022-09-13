import React from "react";

import Heading1 from "./components/Heading1/Heading1";
import MainHeader from "./MainHeader/MainHeader";

const App = () => {
  return (
    <div>
      <MainHeader />
      <div>
        <Heading1>LOREM IPSUM TEXT</Heading1> <div>HERO IMAGE HERE</div>
      </div>
      <div>FOOTER SEARCH BAR</div>
    </div>
  );
};

export default App;
