import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="p-6 rounded-md shadow-md mx-auto max-w-fit bg-[#657287] ">
            <div className="animate-pulse">
                {/* Product Image Skeleton */}
                <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                {/* Product Title Skeleton */}
                <div className="w-[290px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                {/* Product Heading Skeleton */}
                <div className="w-[220px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                {/* Product Description Skeleton */}
                <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
            </div>
        </div>
    );
};

export default ProductSkeleton;