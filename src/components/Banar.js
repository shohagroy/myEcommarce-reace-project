import React from 'react';
import { Link } from 'react-router-dom';

const Banar = () => {
    return (
        <div className=' bg-[#FCF6F6] py-10'>
            <div className="p-6 py-12 bg-violet-400 text-gray-900 max-w-[1200px] m-auto">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                        <br className="sm:hidden"/> 50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg">MAMBA</span>
                        </div>
                        <Link to='/shop' rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 ext-gray-900 dark:border-gray-400">Shop Now</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banar;