import React from "react";
import Slider from "./Components/Slider";
import Header from "./Components/Header";
import Icon from "./Components/Icon";
import About from "./Components/About";
import Team from "./Components/Team";
import Achievement from "./Components/Achievement";
import Comp from "./Components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Icon />
      <About />
      <Team />
      <Achievement />
      <Comp />
    </>
  );
};

export default App;
