import { logoutUser } from "../store/userSlice";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate("/login");
    toast.success("User Logout Successfully");
  };
  return (
    <aside>
      <div className="account-profile">
        <span className="material-icons-outlined account-circle">
          account_circle
        </span>
        <span>Profile</span>
      </div>

      <hr />
      <ul className="sidebar-links">
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
            <span onClick={handleLogOut}>Log Out</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
