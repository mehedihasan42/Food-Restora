import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { BiSolidWalletAlt } from "react-icons/bi";
import { FaCalendarAlt,FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open ms-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
             <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/'><FaHome className='text-xl'/>Home</Link></li>
                    <div className="divider"></div>
                    <li><Link><FaCalendarAlt className='text-xl'/>Reservation</Link></li>
                    <li><Link><BiSolidWalletAlt className='text-xl'/>Payment History</Link></li>
                    <li><Link to='/dashboard/mycart'><LiaShoppingCartSolid className='text-2xl'/>My Cart</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;