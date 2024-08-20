import React from 'react';
import { Link } from 'react-router-dom';
import usePathName from '../../hooks/usePathName';

const Navbar = () => {

    const pathName = usePathName();

    return (
        <div className='flex justify-center gap-8 mb-8 text-blue-700'>
            <Link to='/all-products' className={`${(pathName === '/' || pathName === '/all-products') && 'underline'} hover:text-blue-600`}>All Products</Link>
            <Link to='/top-rated' className={`${pathName === '/top-rated' && 'underline'} hover:text-blue-600`}>Top Rated</Link>
        </div>
    );
};

export default Navbar;