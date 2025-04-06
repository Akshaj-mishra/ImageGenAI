import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Appcontext';

export const Navbar = () => {

  const { user } = useContext(AppContext); 

  
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className='w-8 sm:w-10 lg:w-14 h-auto' />
      </Link>

      <div>
        <h1 className='flex text-black text-9x1 text-left font-semibold'>NuroART</h1>
      </div>

      <div>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3'>
            <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
               <img className='w-5' src={assets.creditStar} alt="" />
               <p className='text-xs sm:text-sm font-medium text-gray-600'> Credits left : 50</p>
            </button>
            <p className='text-black max-sm:hidden pl-4'> Hi, Akshaj</p>
            <div className='relative group'>
               <img src={assets.profileIcon} className='w-10 drop-shadow' alt="" />
               <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                 <ul className='list-none m-0 p-2 bg-white rounded-md text-sm'>
                    <li className='py-1 px-2 cursor-pointer pr-10'> Logout </li>
                 </ul>
               </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-6 lg:gap-8'>
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full hover:bg-zinc-700 transition'>
               login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;