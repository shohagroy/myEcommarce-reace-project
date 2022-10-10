import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className='flex justify-center'>
            <Link to='/shop' className='p-3 px-4 rounded-md bg-orange-500 text-white'>Shop More</Link>
        </div>
    );
};

export default Button;