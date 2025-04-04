import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [user, setUser] = useState(true); // ignore

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className='w-8 sm:w-10 lg:w-14 h-auto' />
      </Link>

      <div>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3'>
            <button className=''>
               <img className='w-5' src={assets.creditStar} alt="" />
               <p> Credits left : 50</p>
            </button>
            <p> Hi, Akshaj</p>
            <div className='relative group'>
               <img src={assets.profileIcon} className='w-10 drop-shadow' alt="" />
               <div className='absoulte hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                 <ul>
                    <li> Logout </li>
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