import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


function App() {
  return (
    <div>
      <Link to="/login">Log in</Link >
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/Register" element={<RegisterForm />}></Route>
        </Routes>
    </div>
  );
}

export default App;
