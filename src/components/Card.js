import React from 'react';

const Card = ({tShirt}) => {

    const {_id, name, picture, price } = tShirt;
    return (
            <div className='flex justify-center items-center  flex-col border-2 m-4'>
                <img src={picture} className=' h-[250px] w-full' alt="Product" />
                <div className='w-full'>
                    <p className='py-1 text-xl text-gray-400'>Reatting:
                    
                    
                    
                    </p>
                    <h3 className='text-xl font-bold text-gray-500'>{name}</h3>
                    <h1 className='text-3xl font-bold py-1 text-orange-600'>Prie: ${price}</h1>
                </div>
            </div>
    );
};

export default Card;