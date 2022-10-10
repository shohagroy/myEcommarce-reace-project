import React from 'react';
import { useLoaderData } from 'react-router-dom';
import produt from '../assests/product-08.png'
import Card from './Card';

const Category = () => {

    const tShirts = useLoaderData()

    console.log(tShirts)
    return (
        <div className='max-w-[1200px] m-auto '>
            <h3 className='text-2xl font-bold'>T-Shirt</h3>

            
            <div className='py-2 grid grid-cols-4 text-center'>

                {
                    tShirts.map(tShirt => <Card key={tShirt._id} tShirt={tShirt} />)
                }
                {/* <div className='w-[300px] m-2'>
                    <img src={produt} alt="Product" />
                    <p className='py-1 text-xl'>Reatting: * * * * *</p>
                    <h3>Name : shohag roy kjasdhfha</h3>
                    <h1 className='text-3xl font-bold py-1'>Prie: $990</h1>
                </div>

                <div></div>
                <div></div> */}

            </div>
        </div>
    );
};

export default Category;