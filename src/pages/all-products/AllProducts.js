import React, { useEffect, useReducer } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import ProductSkeleton from '../../components/product-skeleton/ProductSkeleton';
import { initialState, productReducer } from '../../states/reducers/ProductReducer';
import { FETCHING_ERROR, FETCHING_SUCCESS } from '../../states/action-types/actionTypes';

const AllProducts = () => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: FETCHING_SUCCESS, payload: { products: data } })
            }).catch(err => {
                dispatch({ type: FETCHING_ERROR, payload: { error: err.message } })
            })
    }, [])

    if (state.loading) return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-400 mb-8'>All Products</h1>

            <div className='grid grid-cols-3 gap-8'>

                {
                    Array.from({ length: 9 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))
                }

            </div>
        </div>

    )

    if (state.error) return <p>{state.error}.</p>

    return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-400 mb-8'>All Products</h1>

            <div className='grid grid-cols-3 gap-8'>
                {
                    state.products.map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;







