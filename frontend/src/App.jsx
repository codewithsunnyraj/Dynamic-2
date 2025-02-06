import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { ToastContainer  } from "react-toastify";
const App = () => {
  return (
    <div className="w-full">
      <ToastContainer  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
