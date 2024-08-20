import React, { createContext } from 'react';

export const productContext = createContext();

const ProductProvider = ({ children }) => {

    const value = { test: 'TEST' };

    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;