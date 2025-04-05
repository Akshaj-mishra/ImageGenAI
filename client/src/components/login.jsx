import React from 'react'
import { assets } from '../assets/assets'


export const login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium' >Sign up</h1>
            <p className='text-sm'>Welcome back! please sign in to continue</p>

            <div className='border px-6 flex item-center gap-2 rounded-full mt-5'>
                <img src={assets.profileIcon} class="w-9 h-9 object-cover" alt="" />
                <input type='text'  className='outline-none text-sm' placeholder='Full Name' required />
            </div>

            <div className='border px-6 flex item-center gap-2 rounded-full mt-5'>
                <img src={assets.emailIcon} class="w-9 h-9 object-cover" alt="" />
                <input type='email'  className='outline-none text-sm' placeholder='Email Id ' required />
            </div>
            
            <div className='border px-6 flex item-center gap-2 rounded-full mt-5'>
                <img src={assets.lockIcon} class="w-9 h-9 object-cover" alt="" />
                <input type='password'  className='outline-none text-sm' placeholder='Password' required />
            </div>

        </form>
    </div>
  )
}

export default login