import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <div className="relative bg-herobg md:pb-40 bg-cover">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
