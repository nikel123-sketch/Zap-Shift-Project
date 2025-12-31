import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <fieldset className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input "
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="font-bold text-red-600">Email is required</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input" 
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern,
              })}
            />

            {/* eye btn */}
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          {/* Password Errors */}
          {errors.password?.type === "required" && (
            <p className="font-bold text-red-600">Password is required</p>
          )}
          {/* password errors */}
          {errors.password?.type === "minLength" && (
            <p className="font-bold text-red-600">
              Password must be at least 6 characters
            </p>
          )}

          {/* password condition errors */}
          {errors.password?.type === "pattern" && (
            <p className="font-bold text-red-600">
              Password must contain 1 uppercase, 1 lowercase, 1 number, and 1
              special character
            </p>
          )}

          {/* Forgot Password */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
