import React from "react";
import { assets } from "../constent/assets";

const Hero = () => {
  return (
    <div className="w-full md:px-36 container mx-auto px-10 ">
      <div className="">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center">
            <div>
              <h2 className="md:text-2xl py-2  text-white font-bold">
                We provide professional IT services
              </h2>
              <h1 className="md:text-7xl md:my-5 text-white font-bold font-weather">
                Delivering tech solutions for your startups
              </h1>
              <p className="text-justify md:text-xl  text-white">
                We transform businesses of most major sectors with powerful and
                adaptable digital solutions that satisfy the needs of today.
              </p>
              <div className="md:flex gap-4 my-2 md:mt-8">
                 <button className="bg-blue-700 text-white rounded-md font-bold  py-4 px-8">Work With Us</button>
                 <button className="bg-white rounded-md font-bold  py-4 px-8">View Services</button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img src={assets.heroThumb} className="md:w-[400px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
