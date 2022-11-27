import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProductDisplay = () => {
    

    const products = useLoaderData();
    console.log(products)
    return (
        <div>
            <h1>This is category product display</h1>
        </div>
    );
};

export default CategoryProductDisplay;