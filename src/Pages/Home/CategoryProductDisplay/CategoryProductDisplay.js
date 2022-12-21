import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetailsCard from './ProductDetailsCard/ProductDetailsCard';

const CategoryProductDisplay = () => {
    

    const products = useLoaderData();
    console.log(products)
    return (
        <div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {
          products.length>0 ? products.map((product) => (
            <ProductDetailsCard  key={product._id} product={product} >
            </ProductDetailsCard > 
            
            
            
          ))
          :
          <h1>No Product Available</h1>

          
          
        }
        
     
    </div>
        </div>
    );
};

export default CategoryProductDisplay;