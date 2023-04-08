import React from 'react';

const TShirt = ({ tShirt }) => {
    console.log(tShirt)
    const { name, picture, gender, price } = tShirt;
    return (
        <div className='p-5 bg-gray-100 rounded-lg'>
            <img className='rounded w-72 h-72 mx-auto' src={picture} alt="" />
            <div className='mt-5'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <h2 className='text-lg font-semibold my-3'>Gender: {gender}</h2>
                <h1 className='text-lg font-bold'>Price: {price}</h1>
                <button className='bg-orange-500 text-lg font-semibold my-3 rounded w-full py-2 text-white'>Buy Now</button>
            </div>
        </div>
    );
};

export default TShirt;