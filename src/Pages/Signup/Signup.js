import React, { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  // handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

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



  const handleSignup = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex justify-center items-center container mx-auto  ">
      <div className="w-96  border-2 p-5 shadow-xl rounded-2xl">
        <form onSubmit={handleSubmit(handleSignup)}>
          <h2 className="text-4xl font-bold text-center">Sign Up</h2>
          {/* name */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-600 mt-3">{errors.name?.message}</p>
            )}
          </div>
          {/* email */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 mt-3">{errors.email?.message}</p>
            )}
          </div>

          {/* password  */}

          

          <React.Fragment>
            <section>
              <div className="form-control w-full max-w-xs">
                <div>
                  <div>
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
                            value:
                              /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            message:
                              "Password should include at least one uppercase, one numeric value and one special character,one lowercase",
                          },
                          minLength: {
                            value: 6,
                            message: "Minimum Required length is 6",
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

                      {/* eye section */}
                      <div className="text-2xl absolute top-1 right-5">
                        {passwordEye === false ? (
                          <AiFillEyeInvisible onClick={handlePasswordClick} />
                        ) : (
                          <AiFillEye onClick={handlePasswordClick} />
                        )}
                      </div>
                    </div>

                    {/* confirm password section */}
                    <div className="mt-10 relative">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <input
                        type={
                          confirmPasswordEye === false ? "password" : "text"
                        }
                        placeholder="Confirm Password"
                        onPaste={(e) => {
                          e.preventDefault();
                          return false;
                        }}
                        className={`w-full h-14 rounded-lg input input-bordered  max-w-xs ${
                          errors.confirmPassword &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        } `}
                        {...register("confirmPassword", {
                          required: "confirm password is required",
                          validate: (value) =>
                            value === password || "The passwords do not match",
                        })}
                      />
                      {errors.confirmPassword && (
                        <span className="text-sm text-red-500">
                          {errors.confirmPassword.message}
                        </span>
                      )}

                      {/* eye section */}
                      <div className="text-2xl absolute top-1 right-5">
                        {passwordEye === false ? (
                          <AiFillEyeInvisible
                            onClick={handleConfirmPasswordClick}
                          />
                        ) : (
                          <AiFillEye onClick={handleConfirmPasswordClick} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>

          <input
            className="btn btn-primary w-full mt-10 "
            type="submit"
            value="Sign UP"
            onClick={handleSubmit(handleSignup)}
          />
        </form>
        <p className="mt-2">
          Already Have an Account ?
          <Link className="text-primary font-bold" to="/login">
            {" "}
            Login!
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Continue With GOOGLE</button>
      </div>
    </div>
  );
};

export default Signup;
