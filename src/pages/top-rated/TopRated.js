import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import ProductSkeleton from '../../components/product-skeleton/ProductSkeleton';

const TopRated = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-400 mb-8'>Top Rated</h1>

            <div className='grid grid-cols-3 gap-8'>

                {
                    Array.from({ length: 9 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))
                }

            </div>
        </div>

    )

    if (error) return <p>Something Went Wrong.</p>

    return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-400 mb-8'>Top Rated</h1>

            <div className='grid grid-cols-3 gap-8'>
                {
                    products.filter(product => product.rating.rate > 4).map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default TopRated;