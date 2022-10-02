import { NavLink } from "react-router-dom";
import SearchLogo from "./SearchLogo";
function Navbar() {
  return (
    <nav>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">
            <span class="material-icons-outlined">diamond</span>
            <span>Logo</span>
          </NavLink>
        </li>
        <div className="navbar-right-links">
        <li>
          <NavLink to="/">
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span>Contact</span>
          </NavLink>
        </li>
        <li className="search-container">
            <input type="search" id="search"
            placeholder="Search..." />
             <button>{ <SearchLogo/> }</button>
        </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
