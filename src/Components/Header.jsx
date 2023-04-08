import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-5 max-w-7xl mx-auto bg-gray-200 flex justify-between items-center p-5'>
            <div>
                <h1 className='text-2xl font-bold text-indigo-700'>T-Shirt Brand</h1>
            </div>
            <div className='flex gap-5 text-lg text-indigo-500 font-semibold'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/Order'>Order</Link>
            </div>
        </div>
    );
};

export default Header;