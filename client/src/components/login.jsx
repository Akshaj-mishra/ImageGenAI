import React from 'react'
import { assets } from '../assets/assets'


export const login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form>
            <h1>Sign up</h1>
            <p>Welcome back! please sign in to continue</p>

            <div>
                <img src={assets.profileIcon} alt="" />
                <input type='test' placeholder='Full Name' required />
            </div>
        </form>
    </div>
  )
}

export default login