import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { loginUser } from "../api/AuthenticationApi";
import { useDispatch } from "react-redux";
import { loginUser as loginUserAction } from "../store/userSlice";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null)
  const dispatch = useDispatch();


  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault()
     
    const data = {
      email: email,
      password: password,
    }
    try {
      const response = await loginUser(data)
      if(response.ok){
        const {message, data} =  await response.json()
        window.localStorage.setItem('token', data.token)
        console.log(data.user_id)
        setUserId(data.user_id)
        toast.success(message)
        dispatch(
          loginUserAction({
            email: data.email,
            password: data.password,
            userId: data.user_id,
          })
        );
        navigate('/')
      }
    } catch (error) {
      toast.error(error.message)
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
          <h2>Welcome to Quizzes World </h2>

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
          <div className="input-section">
            <button className="button-login" type="submit">
              Login
            </button>
            <button className="button-create-account" onClick={handleSignUp}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
