import React from 'react';

const ProductDetailsCard = ({product}) => {
    return (
        <div>
            <h1>This is product details of {product.modelName}</h1>
        </div>
    );
};

export default ProductDetailsCard;