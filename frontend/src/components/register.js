import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleform = async (e) => {
    e.preventDefault();
    if (isStrongPassword(user.password)) {
      console.log("userssssssssss", user);
      await axios
        .post("user/register/", user)
        .then(() => {
          alert("succesfully Registered")
           navigate("/login");
        })
        .catch((err) => console.log("invalid", err));
    } else {
      alert("Password is Weak");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const isStrongPassword = (password) => {
    // Add your strong password validation logic here
    // Example: Require at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  return (
    <div>
      <div className=" row align-items-center" style={{ height: "100vh" }}>
        <div
          className=" mx-auto col-10 col-md-8 col-lg-6 "
          style={{ backgroundColor: "#f0f0fa", borderRadius: "20px" }}
        >
          <form className="form-example" onSubmit={handleform}>
            <h1>Register</h1>
            <p className="description my-2"></p>

            <div className="form-group my-2">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                placeholder="Your First Name"
                className="form-control username"
                id="firstname"
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="form-control username"
                id="lastname"
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="lastname">Age</label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="form-control username"
                id="lastname"
                name="age"
                onChange={handleChange}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control username"
                id="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                value="admin"
                name="gender"
                id="inlineRadio1"
              />
              <label
                onChange={handleChange}
                className="form-check-label"
                htmlFor="inlineRadio1"
              >
                Admin
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="user"
                name="gender"
                id="inlineRadio2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                User
              </label>
            </div>

            <div className="form-group my-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Your Password"
                className="form-control password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-customized mt-4"
            >
              Register
            </button>

            <p className="my-3">
              Already Registerd? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
