import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register,formState:{errors}, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const handleLogin=data=>{
    console.log(data)
  }
  return (
    <div className=" h-[500px] flex justify-center items-center container mx-auto ">
     <div className="w-96  border-2 p-5 " >
     <form onSubmit={handleSubmit(handleLogin)}>
        <h2 className="text-4xl font-bold text-center">Login</h2>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email",{required:"Email Address is required"})}
            className="input input-bordered w-full max-w-xs"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-600 mt-3">{errors.email?.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password",{required:"Password is required"})}
            className="input input-bordered w-full max-w-xs"
            placeholder="Password"
          />
           {errors.password && <p className="text-red-600 mt-3" >{errors.password?.message}</p>}
            <label className="label">
            <span className="label-text">Forget Password ?</span>
          </label>
         
        </div>

        <p>{data}</p>
        <input className="btn btn-accent w-full " type="submit" value="Login" />
      </form>
      <p>New to Laptop-Hut ?<Link className="text-primary font-bold" to='/signup'> Create New Account!</Link> </p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full">Continue With GOOGLE</button>
     </div>
    </div>
  );
};

export default Login;
