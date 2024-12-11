import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {

  const {user, logout} = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-left space-y-2">
           <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/allMovies'}>All Movies</NavLink>
            <NavLink to={'/premiere'}>Premiere</NavLink>
            <NavLink to={'/addMovie'}>Add Movie</NavLink>
            <NavLink to={`/myFavourites/${user?.email}`}>My Favourites</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-sm md:text-xl lg:text-3xl font-bold text-[#E50914]">Movie Mania</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 font-bold text-white">
       <NavLink to={'/'}>Home</NavLink>
       <NavLink to={'/allMovies'}>All Movies</NavLink>
       <NavLink to={'/premiere'}>Premiere</NavLink>
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
      user && user?.email ? <Link onClick={logout} className='bg-[#E50914] text-white btn rounded-sm font-medium'>Logout</Link> : <div className='flex space-x-3'>
        <Link to={'/login'} className='bg-[#E50914] text-white rounded-md font-medium btn'>Sign In</Link>
        <Link to={'/register'} className='bg-[#E50914] text-white btn rounded-md font-medium'>Sign Up</Link>
        </div>
    }
  </div>
</div>
    );
};

export default Navbar;