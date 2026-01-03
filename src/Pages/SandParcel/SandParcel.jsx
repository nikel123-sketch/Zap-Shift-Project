import React from "react";
import { useForm } from "react-hook-form";

const SandParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formhendlesubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-teal-700 mb-2">Send A Parcel</h1>
      <p className="text-gray-600 mb-6">Enter your parcel details</p>

      <form onSubmit={handleSubmit(formhendlesubmit)}>
        {/* Parcel Type */}
        <label className="font-medium block mb-2">Parcel Type</label>
        <div className="flex items-center gap-6 mb-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="type" defaultChecked />
            <span>Document</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="type" />
            <span>Not-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            
          {/* Parcel Name */}
          <div>
            <label className="font-medium block mb-1">Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-bordered w-full"
              {...register("parcel-name", {
                required: "Parcel name is required",
              })}
            />
            {errors["parcel-name"] && (
              <p className="text-red-500 text-sm mt-1">
                {errors["parcel-name"].message}
              </p>
            )}
          </div>

          {/* Parcel Weight */}
          <div>
            <label className="font-medium block mb-1">Parcel Weight (KG)</label>
            <input
              type="number"
              placeholder="Parcel Weight (KG)"
              className="input input-bordered w-full"
              {...register("parcel-weight", {
                required: "Parcel weight is required",
              })}
            />
            {errors["parcel-weight"] && (
              <p className="text-red-500 text-sm mt-1">
                {errors["parcel-weight"].message}
              </p>
            )}
          </div>
        </div>

        {/* Sender & Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
          {/* Sender */}
          <div>
            <h3 className="font-semibold mb-4">Sender Details</h3>

            <div className="space-y-4">
              {/* Sender Name */}
              <div>
                <label className="font-medium block mb-1">Sender Name</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Sender Name"
                  {...register("sender-name", {
                    required: "Sender name is required",
                  })}
                />
                {errors["sender-name"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["sender-name"].message}
                  </p>
                )}
              </div>

              {/* Sender Address */}
              <div>
                <label className="font-medium block mb-1">Sender Address</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Address"
                  {...register("sender-address", {
                    required: "Sender address is required",
                  })}
                />
                {errors["sender-address"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["sender-address"].message}
                  </p>
                )}
              </div>

              {/* Sender Phone */}
              <div>
                <label className="font-medium block mb-1">
                  Sender Phone Number
                </label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Sender Phone No"
                  {...register("sender-phone", {
                    required: "Sender phone number is required",
                  })}
                />
                {errors["sender-phone"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["sender-phone"].message}
                  </p>
                )}
              </div>

              {/* Sender District */}
              <div>
                <label className="font-medium block mb-1">
                  Sender District
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("sender-district", {
                    required: "Sender district is required",
                  })}
                >
                  <option value="">Select your District</option>
                  <option>Dhaka</option>
                  <option>Chattogram</option>
                </select>
                {errors["sender-district"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["sender-district"].message}
                  </p>
                )}
              </div>

              {/* Pickup Instruction */}
              <div>
                <label className="font-medium block mb-1">
                  Pickup Instruction
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Pickup Instruction"
                  {...register("pickup-instruction", {
                    required: "Pickup instruction is required",
                  })}
                />
                {errors["pickup-instruction"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["pickup-instruction"].message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="font-semibold mb-4">Receiver Details</h3>

            <div className="space-y-4">
              {/* Receiver Name */}
              <div>
                <label className="font-medium block mb-1">Receiver Name</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Receiver Name"
                  {...register("receiver-name", {
                    required: "Receiver name is required",
                  })}
                />
                {errors["receiver-name"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["receiver-name"].message}
                  </p>
                )}
              </div>

              {/* Receiver Address */}
              <div>
                <label className="font-medium block mb-1">
                  Receiver Address
                </label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Address"
                  {...register("receiver-address", {
                    required: "Receiver address is required",
                  })}
                />
                {errors["receiver-address"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["receiver-address"].message}
                  </p>
                )}
              </div>

              {/* Receiver Phone */}
              <div>
                <label className="font-medium block mb-1">
                  Receiver Phone Number
                </label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Receiver Contact No"
                  {...register("receiver-phone", {
                    required: "Receiver phone number is required",
                  })}
                />
                {errors["receiver-phone"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["receiver-phone"].message}
                  </p>
                )}
              </div>

              {/* Receiver District */}
              <div>
                <label className="font-medium block mb-1">
                  Receiver District
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("receiver-district", {
                    required: "Receiver district is required",
                  })}
                >
                  <option value="">Select your District</option>
                  <option>Dhaka</option>
                  <option>Rajshahi</option>
                </select>
                {errors["receiver-district"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["receiver-district"].message}
                  </p>
                )}
              </div>

              {/* Delivery Instruction */}
              <div>
                <label className="font-medium block mb-1">
                  Delivery Instruction
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Delivery Instruction"
                  {...register("delivery-instruction", {
                    required: "Delivery instruction is required",
                  })}
                />
                {errors["delivery-instruction"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["delivery-instruction"].message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          * Pickup Time 4pm–7pm Approx.
        </p>

        <button className="btn bg-lime-400 hover:bg-lime-500 text-black mt-6">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SandParcel;
