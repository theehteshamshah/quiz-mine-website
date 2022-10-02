import React from "react";
import { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { classes } from "../data/Data";
import toast from "react-hot-toast";
function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstNameLength = firstName.length;
    const lastNameLength = lastName.length;
    console.log(firstNameLength);
    console.log(lastNameLength);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    if (firstNameLength < 3) {
      setIsError(false);
      toast.error("First name should contain at-least 3 characters", {
        duration: 4000,
        position: "top-center",
      });
    }
    if (lastNameLength < 3) {
      setIsError(false);
      toast.error("Last name should contain at-least 3 characters", {
        duration: 4000,
        position: "top-center",
      });
    }
    if (password != confirmPassword) {
      setIsError(false);
      toast.error("Password and confirm password should match", {
        duration: 4000,
        position: "top-center",
      });
    }
    if (password == confirmPassword && password.length >= 8) {
      setIsError(true);
      toast.success("Now enter details to login", {
        duration: 4000,
        position: "top-center",
      });
      navigate("/login");
    }
    if (password.length < 8) {
      setIsError(false);
      toast.error("Password should contain atleast 8 characters", {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <img src="/pic-1.jpg" className="image-login" alt="quiz-mine" />
      </div>
      <div className="right-container">
        <h1 className="heading-1">Quiz Mine</h1>
        <h2>Create Your Account </h2>

        <form className="input-field form-container">
          <div className="input-section item11">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              id="first-name"
              className="first-name"
              name="first-name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-section item12">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              id="last-name"
              className="last-name"
              name="last-name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-section">
            <label htmlFor="email">Email</label>
            <input
              className="input-email"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="anserson123@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-section">
            <label htmlFor="dropdown-register-classes">Class</label>
            <select
              id="dropdown-register-classes"
              name="dropdown-register-classes"
              className="dropdown-register-classes"
              required
            >
              {classes.map((value, index) => {
                return <option value={value.class}>{value.class}</option>;
              })}
            </select>
          </div>

          <div className="input-section">
            <label htmlFor="password">Password</label>
            <input
              className="input-password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-section">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              className="input-confirm-password"
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="bottom-container">
            <button
              className="button-sign-up"
              type="submit"
              onClick={handleSubmit}
            >
              Sign up
            </button>
            <br />
            <h3 className="h3-of-register-form">
              Already have an account, go to{" "}
              <NavLink to="/login">Login Page</NavLink>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
