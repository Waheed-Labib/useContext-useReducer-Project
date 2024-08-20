import React, { createContext, useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../states/reducers/ProductReducer';
import { FETCHING_ERROR, FETCHING_SUCCESS } from '../states/action-types/actionTypes';

export const productContext = createContext();

const ProductProvider = ({ children }) => {

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

    const value = { state, dispatch };

    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;