import React, { use } from "react";
import customericon from '../../../assets/banner/customer-top.png'
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CoustomerReviewCard from "./CoustomerReviewCard";

const CustomersAreSayings = ({ reviewspromisre }) => {
  const reviews = use(reviewspromisre);
  console.log(reviews);
  return (
    <div>
      <div>
        <div className="flex  justify-center">
          <img src={customericon} alt="" />
        </div>
        <h1 className="font-bold text-3xl text-center">
          What our customers are sayings
        </h1>
        <p className="font-semibold text-center mt-3 mb-3">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((reviewdata) => (
            <SwiperSlide key={reviewdata.id}>
              <CoustomerReviewCard
                reviewdata={reviewdata}
              ></CoustomerReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default CustomersAreSayings;
