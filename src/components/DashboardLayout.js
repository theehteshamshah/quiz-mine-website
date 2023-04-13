import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [windowActive, setWindowActive] = useState(false);
  useEffect(() => addRequiredClass(), []);
  window.addEventListener("resize", function () {
    addRequiredClass();
  });
  function addRequiredClass() {
    if (window.innerWidth > 860) {
      setWindowActive(true);
    }
  }

  return (
    <div className="dashboard">
      <Navbar />
      <div className="content-container">
        {windowActive ? <Sidebar /> : null}
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
