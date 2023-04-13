import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import DashboardLayout from "./components/DashboardLayout";
import DashboardContent from "./components/DashboardContent";
import PracticeMCQs from "./components/PracticeMCQs";
import AboutPage from "./components/AboutPage";
import ShowMCQs from "./components/ShowMCQs";
import ResultPage from "./components/ResultPage";
import ContactPage from "./components/ContactPage";
import RequireAuth from "./components/RequireAuth";


function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={
           <RequireAuth>
           <DashboardLayout />
         </RequireAuth>
        }>
          <Route index element={<DashboardContent />}></Route>
          <Route path="/practice" element={<PracticeMCQs />}></Route>
          <Route path="/show" element={<ShowMCQs />}></Route>
          <Route path="/result" element={<ResultPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>

        </Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Routes>
    </div>
  );
}

export default App;
