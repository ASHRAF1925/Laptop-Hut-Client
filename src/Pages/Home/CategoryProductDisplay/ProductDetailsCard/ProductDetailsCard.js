import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Contexts/AuthContext/AuthProvider";
const ProductDetailsCard = ({ product }) => {
  const {
    _id,
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
  const { user } = useContext(AuthContext);

  let phone = "";
  let location = "";
  const addPhone = (event) => {
    phone = event.target.value;
  };
  const addlocation = (event) => {
    console.log(event.target.value);
    location = event.target.value;
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    toast.success("successfully added");
    console.log("helllo");
    const newOrder = {
      buyername: user.displayName ? user.displayName : "no nmae",
      buyerEmail: user.email ? user.email : "noemail",
      buyerPhone: phone,
      deliveryLocation: location,
      sellername: sellername,
      selleremail: selleremail,
      productId: _id,
      productimage: image,
      producttitle: modelName,
      price: newPrice,
    };
    console.log(newOrder);

    fetch(`http://localhost:5000/buyer/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Added");
        navigate("/");
      });
  };

  const handleReportedItem=(product)=>{
    console.log(product)
    fetch(`http://localhost:5000/admin/reportedItem`, {
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
        toast.success("Successfully Added");
        navigate("/");
      });
  };
  

  return (
    <div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
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
          <h3 className="text-xl">
            Seler Name: {sellername}{" "}
            {issellerverified && <BsFillPatchCheckFill />}
          </h3>
          <h3 className="text-xl">Seller Email: {selleremail}</h3>
          <h3 className="text-xl">Location : {address}</h3>
          <h3 className="text-xl">USeage Time: {yearuse}</h3>
          <br />
          <h3 className="text-xl">Added on: {addedDate}</h3>

          <div className="card-actions">
            <button onClick={()=>handleReportedItem(product) } className="btn btn-danger">Report Item</button>
            <label className="btn btn-primary" htmlFor="my-modal-6">
              Book Now
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Buyer Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="buyername"
                className="input input-bordered w-full max-w-xs"
                defaultValue={user?.displayName}
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="buyername"
                className="input input-bordered w-full max-w-xs"
                defaultValue={user?.email}
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="buyername"
                className="input input-bordered w-full max-w-xs"
                defaultValue={modelName}
                disabled
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="buyername"
                className="input input-bordered w-full max-w-xs"
                defaultValue={newPrice}
                disabled
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Buyer Phone Number</span>
              </label>
              <input
                required
                onBlur={addPhone}
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Delivery Location</span>
              </label>
              <input
                required
                onBlur={addlocation}
                type="text"
                placeholder="Location"
                name="location"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <label
              type="submit"
              htmlFor="my-modal-6"
              onClick={handleSubmit}
              className="btn btn-primary w-full mt-10 "
            >
              Book Now
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
