import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
  const navigate=useNavigate();

  const {
    registerUser,
    singUser,
    singOut,
    singInWithGoogle,
    setLoading,
    setUser,
    user,
    loading,
    seterror,
    error,
  } = useAuth();
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // hendle form register---
  const handleForm = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setLoading(false)
        seterror('')
        navigate('/')


      })
      .catch((error) => {
        console.log(error);
        seterror(error.message);
      });
  };

  // googlebtnhendle

  const googlebtnhendle=()=>{
    console.log("googlebtnhendle");
    singInWithGoogle()
    .then(result=>{
      console.log(result.user)
      setUser(result.user);
      setLoading(false);
      seterror('')
      navigate("/");
    })
    .catch(error=>{
      console.log(error)
      seterror(error.message);

    })
  }

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <div className="card-body">
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
                    minLength: 8,
                    pattern,
                  })}
                />

                {/* eye btn */}
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon size={20} />
                  ) : (
                    <EyeIcon size={20} />
                  )}
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
                  Password must contain 1 uppercase, 1 lowercase, 1 number, and
                  1 special character
                </p>
              )}

              {error?<p className="font-bold text-red-600">{error}</p>:''}

              {/* Forgot Password */}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {/* register Button */}
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p>
              all radey have an accout{" "}
              <NavLink
                to={"/login"}
                className="font-bold text-green-400 underline"
              >
                login
              </NavLink>
            </p>
          </form>

          {/* -google btn hendle- */}
          <button
            onClick={googlebtnhendle}
            className="btn bg-white text-black w-full border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
