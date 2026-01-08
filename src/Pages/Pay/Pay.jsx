import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Pay = () => {
    const {parcelId}=useParams();
    const axiosSecure=useAxiosSecure();
    console.log(parcelId)

    const {data:parcelpay}=useQuery({
        queryKey:['parcels',parcelId],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })
    console.log(parcelpay);
    return (
        <div>
            <h1>this is pay</h1>
        </div>
    );
};

export default Pay;