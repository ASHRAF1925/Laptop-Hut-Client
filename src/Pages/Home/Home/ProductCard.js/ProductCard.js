import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
const ProductCard = ({ product }) => {
  const {
    addedDate,
    address,
    brand,
    buyername,
    condition,
    description,
    image,
    isAdvertized,
    issellerverified,
    issold,
    modelName,
    newPrice,
    originalPrice,
    phoneNumber,

    purchaseDate,
    selleremail,
    sellername,
    yearuse,
  } = product;
  return (
   <div>
     <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center m-10">
        <h2 className="card-title">{modelName}</h2>
        <h3 className="text-xl">{brand}</h3>
        <h3 className="text-xl">Price : {newPrice}</h3>
        <h3 className="text-xl">Original Price : {originalPrice}</h3>
        <h3 className="text-xl">USeage Time: {yearuse}</h3>
        <div className="divider"></div> 
        <h1 className="text-xl">Seller Information</h1>
        <p>Description : {description}</p>
        <h3 className="text-xl">Seler Name: {sellername} {issellerverified && <BsFillPatchCheckFill/>}</h3>
        <h3 className="text-xl">Seller Email: {selleremail}</h3>
        <h3 className="text-xl">Location : {address}</h3>
        <h3 className="text-xl">USeage Time: {yearuse}</h3>
        <br />
        <h3 className="text-xl">Added on: {addedDate}</h3>


        <div className="card-actions">
         
          <label className="btn btn-primary" htmlFor="confirmation-modal" >open modal</label>
        </div>
      </div>
    </div>

    {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="confirmation-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
   </div>
  );
};

export default ProductCard;
