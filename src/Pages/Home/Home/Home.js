import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSeller from "../../../Hooks/useSeller";
import Spinner from "../../Shared/Spinner/Spinner";
import Banner from "../Banner/Banner";
import axios from "axios";
import ProductCard from "./ProductCard.js/ProductCard";

const Home = () => {
  const [isSeller] = useSeller();
  const navigate = useNavigate();

  const [products, setproducts] = useState([]);
  const [pageload, setpageload] = useState(true);

  useEffect(() => {
    // api call using axios
    axios
      .get("http://localhost:5000/advertise/products")
      .then((res) => {
        console.log(res.data);
        setproducts(res.data);
        setpageload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { data: allcategoris = [], isLoading } = useQuery({
    queryKey: ["allcategoris"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allcategoris");
      const data = await res.json();
      return data;
    },
  });
  console.log(allcategoris);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if (pageload) {
    return <Spinner></Spinner>;
  }

  console.log(isSeller);

  return (
    <div>
      <Banner></Banner>
      <div className="divider"></div>
      <h1 className="text-3xl text-center font-bold mb-5">Select From the Categoris</h1>
      <div className="mx-auto mx-52">
      {allcategoris.map((category) => (
        <>
          <button
            key={category.brandName}
            onClick={() => {
              navigate(`/category/${category.brandName}`);
            }}
            className="btn btn-primary inline mx-4"
          >
            {category.brandName}
          </button>
        </>
      ))}
      </div>
    

      <div className="divider"></div>

      {products.length > 0 && (
        <>
          <h1 className="text-3xl text-center font-bold">Some Of the best Items</h1>

          <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </>
      )}



      
<div className="divider mt-10"></div>
<h1 className="text-3xl text-center font-bold mb-5">Special Offers</h1>
<div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ">
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-dark">World Cup Offer</h2>
    <p>Buy and Get 10% discounts on any Products</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.unsplash.com/photo-1569831479215-14d8616fd81d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 "alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">November Ending Offer</h2>
    <p>Get 5% discount</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.unsplash.com/photo-1564034503-e7c9edcb420c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Travellers Discount</h2>
    <p>Show us the Traveller Proof and get 12 % discount</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
          
          </div>


    </div>
  );
};

export default Home;
