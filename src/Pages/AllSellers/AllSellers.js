import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const {
    data: sellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        `https://laptop-hut-server.vercel.app/admin/sellers`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(sellers);

  const handleDeleteSeller = (seller) => {
    fetch(`https://laptop-hut-server.vercel.app/admin/delete/${seller._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Deleted Successfully");

        refetch();
      });
  };
  const handleVerifySeller = (seller) => {
    fetch(`https://laptop-hut-server.vercel.app/admin/verify/${seller._id}`, {
      method: "put",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Verified Successfully");

        refetch();
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">
        This are the Sellers
      </h1>
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 ">
        {sellers.map((seller) => (
          <div key={seller._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={seller.photoURL} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{seller.name}</h2>

                {seller.isverified && (
                  <div className="bg-green-600 text-white"> verified</div>
                )}
                {!seller.isverified && (
                  <div className="bg-red-600 text-white"> not verified</div>
                )}
                <button
                  onClick={() => handleDeleteSeller(seller)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleVerifySeller(seller)}
                  className="btn btn-primary m-10"
                >
                  Verify
                </button>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSellers;
