import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [windowActive, setWindowActive] = useState(false);
  let bars = document.querySelectorAll(".hamburger span");
  useEffect(() => addRequiredClass(), []);
  window.addEventListener("resize", function () {
    addRequiredClass();
  });
  useEffect(() => {
    console.log("PIEAS");
    setIsActive(false);
   
    
  }, [location]);
  function addRequiredClass() {
    if (window.innerWidth < 860) {
      setWindowActive(true);
    }
  }
  const handleHamburger = () => {
    if (!isActive) {
      setIsActive(true);
      bars[0].style.transform = "rotate(45deg)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "rotate(-45deg)";
    } else {
      setIsActive(false);
      bars[0].style.transform = "rotate(0deg)";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "rotate(0deg)";
    }
  };
  return (
    <nav className={windowActive ? "mobile" : ""}>
      <div>
        <NavLink to="/" className="navbar-left-section">
          <span class="material-icons-outlined">diamond</span>
          <span>
            <strong>Quiz Mine</strong>
          </span>
        </NavLink>
      </div>
      <div className="hamburger" onClick={handleHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-right-links">
        <ul className={isActive ? "navbar-links open" : "navbar-links"}>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
          {windowActive ? (
            <>
              <li>
                <NavLink to="/">
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/practice">
                  <span>Practice MCQs</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/previous">
                  <span>Previous Results</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings">
                  <span>Settings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <span>Logout</span>
                </NavLink>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
