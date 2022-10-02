
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";



function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(true);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (password.length < 8) {
      setIsError(false);
      toast.error("Password should contain atleast 8 characters", {
        duration: 4000,
        position: "top-center",
      });
    } else {
      navigate("/");
      toast.success("User Logged In successfully");
    }
  };
  const handleSignUp = () => {
    navigate("/register");
  };


  return (
    <div className="main-container">
      <div className="left-container">
        <img src="/pic-1.jpg" className="image-login" alt="quiz-mine" />
      </div>

      <div className="right-container">
        <form className="input-field" onSubmit={handleSubmit}>
          <h1 className="heading-1">Quiz Mine</h1>
          <h2>Welcome to Login </h2>

          <div className="input-section">
            <label htmlFor="email">Email</label>
            <input
              className="input-email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Your E-mail"
            />
          </div>


          <div className="input-section">
            <label htmlFor="password">Password</label>
            <input
              className="input-password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
            />
          </div>

          <button className="button-login" type="submit">
            Login
          </button>
          <button className="button-sign-up" onClick={handleSignUp}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );

}

export default LoginForm;
