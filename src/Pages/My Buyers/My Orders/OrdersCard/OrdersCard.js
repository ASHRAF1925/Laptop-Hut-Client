import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Contexts/AuthContext/AuthProvider";
const OrdersCard = ({ order }) => {


   const {
    buyerEmail,
   buyerPhone,
   buyername,
   deliveryLocation,
   productId,
   selleremail,
   sellername,
   _id,
   productimage,
   producttitle,
      price
}=order;
 


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={productimage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{producttitle}</h2>
    <p>Price {price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Pay</button>
    </div>
  </div>
</div>
  );
};

export default OrdersCard;
