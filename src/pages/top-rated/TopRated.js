import React, { useContext } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import ProductSkeleton from '../../components/product-skeleton/ProductSkeleton';
import { productContext } from '../../contexts/ProductProvider';

const TopRated = () => {

    const { state } = useContext(productContext)

    if (state.loading) return (
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

    if (state.error) return <p>Something Went Wrong.</p>

    return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-400 mb-8'>Top Rated</h1>

            <div className='grid grid-cols-3 gap-8'>
                {
                    state.products.filter(product => product.rating.rate > 4).map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default TopRated;