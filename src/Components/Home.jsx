import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from './TShirt';
import Cart from './Cart';

const Home = () => {
    const tShirts = useLoaderData();
    // console.log(tShirts)
    return (
        <div className='max-w-7xl mx-auto flex justify-between'>
           <div className='t-shirt-container grid grid-cols-3 gap-6'>
                {
                  tShirts.map(tShirt => <TShirt
                  key={tShirt._id}
                  tShirt={tShirt}
                  ></TShirt>)
                }
           </div>
           <div className='cart-container'>
                <Cart/>
           </div>
        </div>
    );
};

export default Home;