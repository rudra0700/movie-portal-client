import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

  const {user, logout} = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100 border-2 border-red-600">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold border-2 border-white text-left space-y-2">
           <NavLink to={'/'}>Home</NavLink>
            <NavLink>All Movies</NavLink>
            <NavLink>Add Movie</NavLink>
            <NavLink>My Favourites</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Movie Mania</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 font-bold text-white">
       <NavLink to={'/'}>Home</NavLink>
       <NavLink to={'/allMovies'}>All Movies</NavLink>
           {
              user && <>
              <NavLink to={'/addMovie'}>Add Movie</NavLink>
              <NavLink to={`/myFavourites/${user?.email}`}>My Favourites</NavLink>
              </>
            }
           
    </ul>
  </div>
  <div className="navbar-end">
  {
            user && user?.email ?  <div className="mr-4">
            <img src={user?.photoURL} alt="" className="w-10 h-10 object-cover rounded-full" title={user?.displayName} />
           </div>:  <FaUserCircle className='text-5xl mr-4 text-white' />
          }
    {
      user && user?.email ? <Link onClick={logout} className='btn'>Logout</Link> : <div className='space-x-3'>
        <Link to={'/login'} className='btn'>Login</Link>
        <Link to={'/register'} className='btn'>register</Link>
        </div>
    }
  </div>
</div>
    );
};

export default Navbar;