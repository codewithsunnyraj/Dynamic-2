import React from "react";
import { assets } from "./constent/assets";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Hero from "./components/Hero";
const App = () => {
  return (
    <div className="w-full">
      <div className="relative bg-herobg md:pb-40 bg-cover">
        <Navbar />
        <Hero/>
      </div>
      <About/>
    </div>
  );
};

export default App;
