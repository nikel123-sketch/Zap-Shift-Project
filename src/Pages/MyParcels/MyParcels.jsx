import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePageview, MdOutlinePreview } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

const MyParcels = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      //   console.log(res.data);
      return res.data;
    },
  });
  console.log(parcels);
  return (
    <div>
      <h1 className="font-bold text-green-400 text-3xl text-center mb-5">
        this is my parcels: {parcels.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-xl ">name</th>
              <th className="font-bold text-xl ">parcelType</th>
              <th className="font-bold text-xl ">parcelweight</th>
              <th className="font-bold text-xl ">sendername</th>
              <th className="font-bold text-xl ">cost</th>
              <th className="font-bold text-xl ">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* parcels map */}

            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelname}</td>
                <td>{parcel.parcelType}</td>
                <td>{parcel.parcelweight}</td>
                <td>{parcel.sendername}</td>
                <td>{parcel.cost}</td>

                <td>
                  {/* view btn */}
                  <button className="btn btn-square hover:bg-primary">
                    <MdOutlinePageview />
                  </button>

                    {/* edit btn */}
                  <button className="btn btn-square hover:bg-primary">
                    <FaEdit />
                  </button>

                  {/* delete btn */}

                  <button className="btn btn-square hover:bg-primary">
                    <IoTrashOutline />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
