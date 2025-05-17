import React from 'react'
import { assets } from '../assets/assets'


export const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div  className='text-stone-500 inline-flex text-center gap-2 bg-white
         px-6 py-1 rounded-full border border-neutral-500'>
            <p>Best text to image generator</p>
            <img src={assets.starIcon} alt="" />
        </div>
        <h1 className='text-4xl msx-w-{300px} sm:text-7xl sm:max-w-[590] mx-auto mt-10 text-center'>Turn text to</h1>
        <h1 className='text-4xl msx-w-{300px} sm:text-7xl sm:max-w-[590] mx-auto mt-0 text-center'><span className='text-blue-600'>image</span> in Seconds .</h1>

        <p className='mt-20 my-24 text-2xl text-center'>Unleash your creativity with Ai. Turn your wild imagination into visual art in seconds - just type and watch the magic happen. </p>
    </div>
  )
}



export default Header
