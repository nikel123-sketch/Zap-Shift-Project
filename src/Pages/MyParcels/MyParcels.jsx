import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePageview, MdOutlinePreview } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: parcels = [],refetch } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      //   console.log(res.data);
      return res.data;
    },
  });
  console.log(parcels);

  //   -------------------------
  // hendledeletebtn---
  const hendledeletebtn= async(id)=>{
    console.log('ok', id)
    

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // database--
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount){
            Swal.fire({
              title: "Deleted!",
              text: "Your parcels request has been deleted.",
              icon: "success",
            });

            // refetch the data in the ui
            refetch()
          }
            
        });
        
      }
    });
     
  }


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

              <th className="font-bold text-xl ">cost</th>
              <th className="font-bold text-xl ">payment</th>
              <th className="font-bold text-xl ">delevary Status</th>
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
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentstatus === "paid" ? (
                    <span className="font-bold text-green-400">paid</span>
                  ) : (
                    <Link to={`/dashboard/pay/${parcel._id}`}>
                      <button className="btn btn-sm btn-primary ">pay</button>
                    </Link>
                  )}
                </td>
                <td>{parcel.deliveryinstruction}</td>

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

                  <button
                    onClick={() => hendledeletebtn(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
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
