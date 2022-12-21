import React from "react";
import toast from "react-hot-toast";

const SellerPropductDetails = ({ product, refatching }) => {
  console.log(product);

  const handleDeleteProduct = (product) => {
    fetch(
      `https://laptop-hut-server.vercel.app/seller/product/${product._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Deleted Successfully");
        refatching();
      });
  };

  const handleAdvertise = (product) => {
    product.isAdvertized = true;

    fetch(`https://laptop-hut-server.vercel.app/seller/advertise`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refatching();
        window.location.reload();

        toast.success("Successfully Added for Advertisement");
      });

    console.log(product);
  };

  return (
    <div>
      <h1> This is seller Product Details{product.name};</h1>
      <h1>Product id {product._id}</h1>
      {!product?.issold && product?.isAdvertized ? (
        <button
          disabled
          onClick={() => handleAdvertise(product)}
          className="btn btn-secondary"
        >
          Advertise
        </button>
      ) : (
        <button
          onClick={() => handleAdvertise(product)}
          className="btn btn-secondary"
        >
          Advertise
        </button>
      )}

      <button
        onClick={() => handleDeleteProduct(product)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default SellerPropductDetails;
