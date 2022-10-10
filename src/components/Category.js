import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from './Button';
import Card from './Card';
import { fetchData } from './utility';


const Category = ({product}) => {

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data))


    const data = async (url)  =>{
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
        return data
    }
    

    const tShirts = useLoaderData()

    const mobileData = data('https://openapi.programming-hero.com/api/phones?search=iphone');

    console.log(mobileData)

    return (
        <div className='max-w-[1200px] m-auto p-2 '>
            <h3 className='text-2xl font-bold'>{product}</h3>

            
            <div className='py-2 grid md:grid-cols-4 sm:grid-cols-2  '>

                {
                    tShirts.slice(0, 4).map(tShirt => <Card key={tShirt._id} tShirt={tShirt} />)
                }

            </div>
                <Button/>

                
        </div>
    );
};

export default Category;