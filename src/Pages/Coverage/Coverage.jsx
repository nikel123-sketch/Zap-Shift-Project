
// use to  React Leaflet

import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
  const servicesdata=useLoaderData();
  // console.log(servicesdata)
  const mapref=useRef(null)
  const position = [23.6850, 90.3563];

  // hendleSearch----
  const hendleSearch=(e)=>{
    e.preventDefault()
    const userSharch=e.target.sharch.value;
    // console.log(userSharch)
    const searchdistrict = servicesdata.find((c) => c.district.toLowerCase().includes(userSharch.toLowerCase()));
    // console.log(searchdistrict)
    if(searchdistrict){
      const coord = [searchdistrict.latitude,searchdistrict.longitude];
      // console.log(coord)
      mapref.current.flyTo(coord,14)
    }
  }

    return (
      <div className='p-6'>
        <h1 className="font-bold text-3xl">We are available in 64 districts</h1>

        {/* search */}
        <div className=" mt-5 mb-5">
          {/* Search form */}
          <form onSubmit={hendleSearch}>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                name="sharch"
                className="grow"
                placeholder="Search"
              />
            </label>
          </form>
        </div>

        {/* map */}
        <div className="  h-[800px] ">
          <h1 className="font-bold text-3xl">
            We deliver almost all over Bangladesh
          </h1>
          <MapContainer
            className="h-[700px] rounded-4xl"
            center={position}
            zoom={9}
            scrollWheelZoom={false}
            ref={mapref}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {servicesdata.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br /> service area:
                  {center.covered_area.join(" ,")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    );
};

export default Coverage;