import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [user, setUser] = useState(false); // ignore

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to="/">
        <img src={assets.logo} alt="Logo" className='w-28 sm:w-32 lg:w-40' />
      </Link>

      <div>
        {user ? (
          <div></div>
        ) : (
          <div className='flex items-center gap-2 sm:gap-5'>
            <button className=' bg-zinc-800 text-white px-7 py-2  sm:px-10 text-sm rounded-full'>
               login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;