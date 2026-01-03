import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SandParcel = () => {
  // load data---
  const servisecenter = useLoaderData();

  // react hooks form--
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  // sender region---------------
  // region---
  const regionsDuplicate = servisecenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // console.log(regions);

  const senderRegion = useWatch( {control, name:"senderregion"});
  console.log(senderRegion)

  const recevierRegion = useWatch({ control, name: "recevierregion" });

  // districtsbyregion---
  const districtsbyregion = (region) => {
    const regionDistricts = servisecenter.filter((c) => c.region === region);

    const districts = regionDistricts.map((d) => d.district);
    // console.log(districts)
    return districts;
  };



  // formhendlesubmit----
  const formhendlesubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-teal-700 mb-2">Send A Parcel</h1>
      <p className="text-gray-600 mb-6">Enter your parcel details</p>

      <form onSubmit={handleSubmit(formhendlesubmit)}>
        {/* Parcel Type */}
        <label className="font-medium block mb-2">Parcel Type</label>

        <div className="flex items-center gap-6 mb-1">
          {/* document type */}
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="document"
              {...register("parcelType", {
                required: true,
              })}
            />
            <span>Document</span>
          </label>

          {/* not document type */}
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="not-document"
              {...register("parcelType", {
                required: true,
              })}
            />
            <span>Not-Document</span>
          </label>
        </div>

        {/* {errors.parcelType?.type==='required'&&<p className="font-bold text-red-600">parcel type must be required</p>} */}

        {/* ----------------- */}

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

        <div className="border-1 border-dotted w-full mt-5 mb-5"></div>

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

              {/* sender email */}
              <div>
                <label className="font-medium block mb-1">Sender Email</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Sender Email"
                  {...register("sender-email", {
                    required: "Sender email is required",
                  })}
                />
                {errors["sender-email"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["sender-email"].message}
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

              {/* Sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region</legend>

                <select
                  {...register("senderregion")}
                  defaultValue="Pick a Region"
                  className="select"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>

                <select
                  {...register("senderdistrict")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsbyregion(senderRegion).map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

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

              {/* recevier email */}
              <div>
                <label className="font-medium block mb-1">Receiver Email</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Receiver Email"
                  {...register("receiver-email", {
                    required: "Receiver email is required",
                  })}
                />
                {errors["receiver-email"] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors["receiver-email"].message}
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

              {/* recevier region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Recevier Region</legend>

                <select
                  {...register("recevierregion")}
                  defaultValue="Pick a Region"
                  className="select"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Recevier districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Recevier Districts</legend>

                <select
                  {...register("recevierdistrict")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsbyregion(recevierRegion).map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

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
