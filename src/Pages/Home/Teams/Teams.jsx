import React from 'react';
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/star.png";
import logo7 from "../../../assets/brands/start_people.png";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const logos=[logo1,logo2,logo3,logo4,logo5,logo6,logo7]
const Teams = () => {
    return (
      <div>
        <h1 className='mt-5 font-bold text-3xl text-center'>We've helped thousands of sales teams</h1>
        <div className=" p-5  mb-4 bg-green-300">
          <Swiper
            loop={true}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img src={logo} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
};

export default Teams;