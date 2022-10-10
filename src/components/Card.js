import React from 'react';

const Card = ({tShirt}) => {

    const {_id, name, picture, price } = tShirt;
    return (
            <div className='w-[300px] p-5'>
                <img src={picture} alt="Product" />
                <p className='py-1 text-xl'>Reatting: * * * * *</p>
                <h3>Name : shohag roy kjasdhfha</h3>
                <h1 className='text-3xl font-bold py-1'>Prie: $990</h1>
            </div>
    );
};

export default Card;