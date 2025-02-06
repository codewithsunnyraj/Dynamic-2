import React from "react";
import Hero from "./Hero";
import { IoMdCall, IoMdMailUnread } from "react-icons/io";
import { assets } from "../constent/assets";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="md:px-36 py-4 md:py-12 px-10">
      <div className="container mx-auto relative">
        <div className="flex justify-between font-weather text-white">
          <div>
            <p className="">2774 Oak Drive, Plattsburgh, New York</p>
          </div>
          <div className="flex gap-8">
            <p className="flex items-center gap-4">
              <IoMdCall size={24} />
              518-564-3200
            </p>
            <p className="flex items-center gap-4">
              <IoMdMailUnread size={24} />
              tecbolt@example.com
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md flex  top-0 justify-between px-4 py-4 my-8">
          <div className="flex items-center gap-14">
            <div>
              <img src={assets.logo} alt="" />
            </div>
            <ul className="flex font-weather gap-6">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div>
                <CiSearch size={30} className="font-extrabold" />
              </div>
              <div>
                <button className="bg-blue-700 font-weather text-white py-3 px-4 rounded-md">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
