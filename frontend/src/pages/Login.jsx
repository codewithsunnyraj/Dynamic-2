import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../Redux/globalReducer";
import Dashboard from "../../../Admin/src/pages/Dashboard";
const Login = () => {
  const baseUrl = useSelector((state) => state.globalSunny.baseUrl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(baseUrl);
  }, [baseUrl]);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = response.data;
      dispatch(setToken(token)); //save token globally
      localStorage.setItem("authToken", token);
      console.log(token);
      toast.success("User Login Successfully");
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.error("Error occur while login");
    }
  };
  return (
    <div className="w-full flex justify-center items-center bg-black h-screen ">
      <div className="">
        <div className="p-4 border border-white rounded-sm w-96">
          <form action="">
            <div>
              <h2 className="text-white font-weather text-center text-2xl py-4">
                Login Here
              </h2>
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={(event) => {
                  setData({ ...data, [event.target.name]: event.target.value });
                }}
                placeholder="Enter Email Id"
                className="bg-transparent rounded-full border py-2 px-3 text-white my-2 focus:outline-none w-full"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(event) => {
                  setData({ ...data, [event.target.name]: event.target.value });
                }}
                placeholder="Enter Password"
                className="bg-transparent rounded-full border py-2 px-3 my-2 text-white focus:outline-none w-full"
              />
            </div>
            <div>
              <button
                onClick={onSubmit}
                className="btn text-white bg-sky-700 w-full my-2 py-3 rounded-md font-weather text-xl"
              >
                Submit
              </button>
            </div>
            <div>
              <p className="text-white text-center">
                Not Account Till ?
                <Link
                  to="/register"
                  className="ps-2 cursor-pointer text-red-600"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
