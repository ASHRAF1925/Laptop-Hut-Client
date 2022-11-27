import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSeller from "../../../Hooks/useSeller";
import Spinner from "../../Shared/Spinner/Spinner";
import Banner from "../Banner/Banner";

const Home = () => {
  const [isSeller] = useSeller();
  const navigate=useNavigate();
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

  console.log(isSeller);

  return (
    <div>
      <Banner></Banner>
      <div className="divider"></div>
      <h1>Select From the Categoris</h1>
      {allcategoris.map((category) => (
        <>
          <button onClick={()=>{
            navigate(`/category/${category.brandName}`)
          }} className="btn btn-primary inline mx-4">{category.brandName}</button>
        </>
      ))}

      <div className="divider"></div>
    </div>
  );
};

export default Home;
