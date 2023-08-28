import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "../axios";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleform = async (e) => {
    e.preventDefault()
    try {

      const response = await axios.post("/user/login", user);
      console.log(response.data.token)
      const token = response.data.token;
      const loguser= response.data.user;

     if (token&&loguser){
        localStorage.setItem("token", token);
        navigate("/dashboard", { state: { loguser: loguser } });

     }
     else{
        alert("Invalid Credentials")
     }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div
          className="mx-auto col-10 col-md-8 col-lg-6 "
          style={{ backgroundColor: "#f0f0fa", borderRadius: "20px" }}
        >
          <form className="form-example" onSubmit={handleform}>
            <h1>LOGIN</h1>
            <p className="description my-2"></p>

            <div className="form-group my-2">
              <label htmlFor="username">Email:</label>
              <input
                type="text"
                className="form-control username"
                id="email"
                name="email"
                value={user.email}
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control password"
                id="password"
                value={user.password}
                placeholder="Your Password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-customized mt-4"
            >
              Log in
            </button>
            <p className="my-3">
              New User? <a href="/">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
