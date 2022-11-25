import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  // handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));

  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  // handle confirm password eye
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const password = watch("password");

  return (
    <div className=" h-[500px] flex justify-center items-center container mx-auto  ">
      <div className="w-96  border-2 p-5 shadow-xl rounded-2xl">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h2 className="text-4xl font-bold text-center">Login</h2>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 mt-3">{errors.email?.message}</p>
            )}
          </div>

          <div className="mt-10 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={passwordEye === false ? "password" : "text"}
              placeholder="Password"
              className={`w-full h-14 rounded-lg input input-bordered  max-w-xs ${
                errors.password &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              } `}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message:
                    "Password should include at least one uppercase, one numeric value and one special character",
                },
                minLength: {
                  value: 8,
                  message: "Minimum Required length is 8",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum Required length is 20",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
            <label className="label">
              <span className="label-text">Forget Password ?</span>
            </label>

            {/* eye section */}
            <div className="text-2xl absolute top-1 right-5">
              {passwordEye === false ? (
                <AiFillEyeInvisible onClick={handlePasswordClick} />
              ) : (
                <AiFillEye onClick={handlePasswordClick} />
              )}
            </div>
          </div>

       
          <input
            className="btn btn-primary w-full "
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-2">
          New to Laptop-Hut ?
          <Link className="text-primary font-bold" to="/signup">
            {" "}
            Create New Account!
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Continue With GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
