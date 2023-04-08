import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirtData = useLoaderData();
    console.log(tShirtData)
    return (
        <div className='max-w-7xl mx-auto'>
            <h1>T shirt : {tShirtData.length}</h1>
        </div>
    );
};

export default Home;