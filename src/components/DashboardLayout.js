import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return ( 
        <div className="dashboard">
            <Navbar />
            <div className="content-container">
                <Sidebar />
                <Outlet />
            </div>
        </div>
     );
}

export default DashboardLayout;