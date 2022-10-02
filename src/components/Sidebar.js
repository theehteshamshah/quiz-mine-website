import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <aside>
        <span class="material-icons-outlined">account_circle</span>
        <span>Profile</span>
        <hr />
        <ul className="sidebar-links">
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
        </ul>
    </aside>
  );
}

export default Sidebar;
