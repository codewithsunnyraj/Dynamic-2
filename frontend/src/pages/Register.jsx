import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <div className="w-full flex justify-center items-center bg-black h-screen ">
        <div className="">
          <div className="p-4 border border-white rounded-sm w-96">
            <form action="">
              <div>
                <h2 className="text-white font-weather text-center text-2xl py-4">
                  Register Here
                </h2>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(event) =>
                    setData({
                      ...data,
                      [event.target.name]: event.target.value,
                    })
                  }
                  placeholder="Enter UserName"
                  className="bg-transparent text-white rounded-full border py-2 px-3 my-2 focus:outline-none w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(event) =>
                    setData({
                      ...data,
                      [event.target.name]: event.target.value,
                    })
                  }
                  placeholder="Enter Email Id"
                  className="bg-transparent text-white rounded-full border py-2 px-3 my-2 focus:outline-none w-full"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={(event) =>
                    setData({
                      ...data,
                      [event.target.name]: event.target.value,
                    })
                  }
                  placeholder="Enter Password"
                  className="bg-transparent text-white rounded-full border py-2 px-3 my-2 focus:outline-none w-full"
                />
              </div>
              <div>
                <button
                  onClick={onSubmit}
                  className="btn text-white bg-sky-700 w-full my-2 py-3 rounded-md font-weather text-xl"
                >
                  Register
                </button>
              </div>
              <div>
                <p className="text-white text-center">
                  Already Account ?
                  <Link
                    to="/login"
                    className="ps-2 cursor-pointer text-red-600"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
