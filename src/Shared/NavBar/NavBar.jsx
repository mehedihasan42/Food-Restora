import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../hooks/useCart';

const NavBar = () => {

  const { user, logOut } = useAuth()
  const [,cart] = useCart() 

  const handleLogout = () => {
    logOut()
      .then(() =>{})
      .catch(error => console.log(error))
  }

  const navBar = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/menu'>Menu</NavLink></li>
    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
    <li><NavLink to='/dashboard'>My Orders</NavLink></li>
    <li>
      <button className="btn">
       <FaShoppingCart className='text-2xl'/>
        <div className="badge badge-secondary">+{cart?.length || 0}</div>
      </button>
    </li>
  </>

  return (
    <>
      <div className="navbar bg-black text-gray-200 max-w-screen-xl bg-opacity-30 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navBar}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navBar}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
              <li>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </li>
              <li><NavLink onClick={handleLogout} className='btn'>Logout</NavLink></li>
              {/* <li><img className='w-8' src={user?.photoURL} alt="" /></li> */}
            </>
              : <> <li><NavLink className='btn' to='/login'>Login</NavLink></li></>
          }
        </div>
      </div>
    </>
  );
};

export default NavBar;