import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import DashboardLayout from "./components/DashboardLayout";
import DashboardContent from "./components/DashboardContent";
import PracticeMCQs from "./components/PracticeMCQs";
import ShowMCQs from "./components/ShowMCQs";


function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardContent />}></Route>
          <Route path="/practice" element={<PracticeMCQs />}></Route>
          <Route path="/show" element={<ShowMCQs />}></Route>
        </Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Routes>
    </div>
  );
}

export default App;
