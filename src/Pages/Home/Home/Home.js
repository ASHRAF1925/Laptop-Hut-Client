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
      <h1>Select From the Categoris</h1>
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

      <div className="divider"></div>

      {products.length > 0 && (
        <>
          <h1>Some Of the best Items</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
