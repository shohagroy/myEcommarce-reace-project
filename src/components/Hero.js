import React from 'react';
import HeroImage from '../assests/slider-2-1.webp'

const Hero = () => {
    return (
        <div className='bg-[#FCF6F6] grid grid-cols-2'>
            <div className='flex flex-col justify-center items-center'>
                <p className='uppercase'>sales of 45% off</p>
                <h2 className='text-6xl p-3 text-center font-bold'>Exclusive New <br /> Offer 2021</h2>
                <button className='bg-orange-500 text-white flex p-3 px-5 rounded-2xl m-2 hover:bg-white hover:text-orange-500 duration-300'>Shop Now

                <span className='pl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                </span>                
                
                </button>
            </div>
            <div className='text-center'>
                <img src={HeroImage} className='pt-10 w-[60%]' alt="" />
            </div>
        </div>
    );
};

export default Hero;