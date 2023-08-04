import { Link, Outlet } from "react-router-dom";
import { GoHome } from 'react-icons/go';
import { FaTasks } from 'react-icons/fa';
import { MdOutlineAddTask } from 'react-icons/md';

const MainLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side font-bold bg-blue-300">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full">
                        {/* Sidebar content here */}
                        <li className="text-xl"><Link to="/dashboard"><GoHome></GoHome>Dashboard</Link></li>
                        <li className="text-xl"><Link to="/allTasks"><FaTasks></FaTasks>All Tasks</Link></li>
                        <li className="text-xl"><Link to="/addTask"><MdOutlineAddTask></MdOutlineAddTask>Add A New Task</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;