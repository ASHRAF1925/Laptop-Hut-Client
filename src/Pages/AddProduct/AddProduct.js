import React, { useContext, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

import Spinner from "../Shared/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const [signupError, setsignupError] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [imgUrl, setImgUrl] = useState("");
  const [purchaseDate, setpurchaseDate] = useState(new Date());

  const imageHostKey = process.env.REACT_APP_imgbb_KEY;
  const navigate = useNavigate();
 

  function dhm(ms) {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysms = ms % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = ms % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = ms % (60 * 1000);
    const sec = Math.floor(minutesms / 1000);
    return days + "days:";
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      sellername: user.displayName,

      selleremail: user.email,
      addedDate: startDate,
      image: imgUrl,
      purchaseDate: purchaseDate,
    },
  });

  //loading all categoris

  const { data: allcategoris = [], isLoading } = useQuery({
    queryKey: ["allcategoris"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allcategoris");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  // function to add Product
  const handleSignup = (data) => {
    setsignupError("");

    console.log(data);

    const image = data.photo[0];
    

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData);
          setImgUrl(imgData.data.url);
          const newProduct = {
            addedDate: data.addedDate,
            address: data.address,
            brand: data.brand,
            condition: data.condition,
            description: data.description,
            image: imgData.data.url,
            modelName: data.modelName,
            newPrice: data.newPrice,
            originalPrice: data.originalPrice,
            phoneNumber: data.phoneNumber,
            photo: data.photo,
            purchaseDate: data.purchaseDate,
            selleremail: data.selleremail,
            sellername: data.sellername,
            buyername: null,
            issold: false,
            yearuse: dhm(startDate - purchaseDate),
            issellerverified: false,
          };

          console.log(newProduct);

          fetch(`http://localhost:5000/seller/addproduct`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Successfully Added");
              navigate('/dashboard/seller/myproducts')
            });
        }
      });
  };

  return (
    <div className=" flex justify-center items-center container mx-auto  ">
      <div className="w-96  border-2 p-5 shadow-xl rounded-2xl">
        <form onSubmit={handleSubmit(handleSignup)}>
          <h2 className="text-4xl font-bold text-center">
            Add Product Details
          </h2>

          {/* Seller Information start  */}

          <div className="divider"></div>

          <h1>Seller Information</h1>

          {/* Seller name  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              disabled
              type="text"
              {...register("sellername", {
                required: "Model Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Model Name"
            />
            {errors.name && (
              <p className="text-red-600 mt-3">{errors.sellername?.message}</p>
            )}
          </div>

          {/* Seller email  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              disabled
              type="text"
              {...register("selleremail", {
                required: "Model Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Model Name"
            />
            {errors.name && (
              <p className="text-red-600 mt-3">{errors.selleremail?.message}</p>
            )}
          </div>

          {/* Seller Information end */}

          <div className="divider"></div>

          {/* Added Date start  */}

          <h1>Added on</h1>
          <DatePicker
            readOnly
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          {/* Added Date end */}

          <div className="divider"></div>

          <h1>Product Informtaion</h1>

          {/*Model Name  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Model Name</span>
            </label>
            <input
              type="text"
              {...register("modelName", { required: "Model Name is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Model Name"
            />
            {errors.name && (
              <p className="text-red-600 mt-3">{errors.modelName?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <div>
              <div>
                {/* image upload  */}

                <div className="photo mt-5 ">
                  <h1>Upload the Image of the Product</h1>
                  <img
                    src={
                      watch("photo")
                        ? URL.createObjectURL(watch("photo")[0])
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                    sx={{ width: "200px", height: "200px" }}
                  />
                  <label htmlFor="contained-button-file">
                    <input
                      className="file-input file-input-bordered w-full max-w-xs mt-4"
                      accept="image/*"
                      id="contained-button-file"
                      type="file"
                      onChange={(e) => setValue("photo", e.target.files)}
                      multiple
                    />
                  </label>
                </div>

                {/* brand type  */}
                <label className="label">
                  <span className="label-text">Select The Brand</span>
                </label>

                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("brand")}
                >
                  {allcategoris.map((category, i) => (
                    <option key={i} value={category.brandName}>
                      {category.brandName}
                    </option>
                  ))}
                </select>

                {/* new price  */}

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    {...register("newPrice", {
                      required: "Price  is required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Price"
                  />
                  {errors.name && (
                    <p className="text-red-600 mt-3">
                      {errors.newPrice?.message}
                    </p>
                  )}
                </div>

                {/* original price  */}

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Original Price</span>
                  </label>
                  <input
                    type="text"
                    {...register("originalPrice", {
                      required: "Original  Price  is required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Original Price"
                  />
                  {errors.name && (
                    <p className="text-red-600 mt-3">
                      {errors.originalPrice?.message}
                    </p>
                  )}
                </div>
                {/* Condtion type  */}
                <label className="label">
                  <span className="label-text">Select The Condition</span>
                </label>

                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("condition")}
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Excellent">Good</option>
                  <option value="Excellent">Average</option>
                  <option value="Excellent">Bad</option>
                  <option value="Excellent">Worst</option>
                </select>

                {/* Condtion type  */}
                <label className="label">
                  <span className="label-text">Date of Purchase</span>
                </label>
                <DatePicker
                  selected={purchaseDate}
                  onChange={(date) => setpurchaseDate(date)}
                />

                {/* product description  */}

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Product Description</span>
                  </label>
                  <input
                    type="text"
                    {...register("description", {
                      required: "Model Description is required",
                    })}
                    className="textarea textarea-bordered h-24"
                    placeholder="Write about the Product"
                  />
                  {errors.name && (
                    <p className="text-red-600 mt-3">
                      {errors.description?.message}
                    </p>
                  )}
                </div>

                <div className="divider"></div>
                <h1>Contact Information</h1>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Phone Number"
                  />
                  {errors.name && (
                    <p className="text-red-600 mt-3">
                      {errors.phoneNumber?.message}
                    </p>
                  )}
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Address"
                  />
                  {errors.name && (
                    <p className="text-red-600 mt-3">
                      {errors.address?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <input
            className="btn btn-primary w-full mt-10 "
            type="submit"
            value="ADD"
            onClick={handleSubmit(handleSignup)}
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
