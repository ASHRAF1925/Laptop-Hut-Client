import React from 'react';
import toast from 'react-hot-toast';

const SellerPropductDetails = ({product,refatching}) => {
    console.log(product)





const handleDeleteProduct=(product)=>{
    fetch(`http://localhost:5000/seller/product/${product._id}`,{
        method:'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
       
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        toast.success("Deleted Successfully")
        refatching();
    })
}


    return (
        <div>
           <h1> This is seller Product Details{product.name};</h1>
           <h1>Product id {product._id}</h1>
           {
            !product?.issold &&  <button className='btn btn-secondary'>Advertise</button>
           }

            <button onClick={()=>handleDeleteProduct(product)} className='btn btn-danger'>Delete</button>
        </div>
    );
};

export default SellerPropductDetails;