import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [user, setUser] = useState(false); // ignore

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className='w-8 sm:w-10 lg:w-14 h-auto' />
      </Link>

      <div>
        {user ? (
          <div></div>
        ) : (
          <div className='flex items-center gap-6 lg:gap-8'>
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-6 text-sm rounded-full hover:bg-zinc-700 transition'>
               login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;