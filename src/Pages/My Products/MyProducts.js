import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import SellerPropductDetails from "../SellerProductDetails.js/SellerPropductDetails";
import Spinner from "../Shared/Spinner/Spinner";

const MyProducts = () => {
  const user = useContext(AuthContext);

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/seller/products`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

 



  const refatching=()=>{
    refetch();
  }
  if(isLoading)
  {
    return <Spinner></Spinner>
  }

  console.log(products);

  return (
    <div>
      <h1>My products</h1>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {
          products.length>0 ? products.map((product) => (
            <SellerPropductDetails key={product._id} product={product} refatching={refatching}>
            </SellerPropductDetails> 
            
            
          ))
          :
          <h1>No Product Available</h1>

          
          
        }
     
    </div>
    </div>
  );
};

export default MyProducts;
