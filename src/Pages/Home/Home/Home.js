import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import Spinner from "../../Shared/Spinner/Spinner";

const Home = () => {
  const { data: allcategoris = [], isLoading } = useQuery({
    queryKey: ["allcategoris"],
    queryFn: async() => {
     const res=await fetch("http://localhost:5000/allcategoris")
     const data=await res.json()
     return data;
    },
  });
  console.log(allcategoris);
  if(isLoading)
  {
    return <Spinner></Spinner>
  }

  return <div>
  <div className="divider"></div> 
  <h1>Select From the Categoris</h1>
  {
    allcategoris.map(category=><>
    <h1>{category.brandName}</h1>
    </>)
  }

  <div className="divider"></div> 

  </div>;
};

export default Home;
