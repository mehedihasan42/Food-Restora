import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { BiSolidWalletAlt } from "react-icons/bi";
import { FaCalendarAlt,FaHome } from "react-icons/fa";
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    // TODO:make admin dynamic
    const [isAdmin] = useAdmin();
    const [,cart] = useCart()
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
                    {/* -------------admin dashboard------------------ */}
                   {
                    isAdmin?<>
                     <li><Link to='/dashboard/allusers'><FaCalendarAlt className='text-xl'/>All Users</Link></li>
                    <li><Link><BiSolidWalletAlt className='text-xl'/>Payment History</Link></li>
                    <li className='flex'>
                  <Link to='/dashboard/mycart' className="flex items-center">
                   <LiaShoppingCartSolid className='text-2xl'/>My Cart 
                  <span className='bg-slate-600 p-2 text-slate-50 rounded-xl'>{cart.length}</span>
                  </Link>
                    </li>
                    </>:<>
                    <li><Link><FaCalendarAlt className='text-xl'/>Reservation</Link></li>
                    <li><Link><BiSolidWalletAlt className='text-xl'/>Payment History</Link></li>
                    <li className='flex'>
                  <Link to='/dashboard/mycart' className="flex items-center">
                   <LiaShoppingCartSolid className='text-2xl'/>My Cart 
                  <span className='bg-slate-600 p-2 text-slate-50 rounded-xl'>{cart.length}</span>
                  </Link>
                    </li>
                    </>
                   }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;