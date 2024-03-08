import React, { FC } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import BannerImage from "../../../../public/assets/images/banner_image.webp"

type Props = {};

const TopSwiper: FC<Props> = () => {
  const swiperList = [1, 2, 3, 4];
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {swiperList.map((items) => (
          <SwiperSlide>
            <div className="aspect-10/4 bg-green-300 rounded-lg flex items-center justify-center !overflow-hidden">
              <Image
                src={BannerImage}
                alt="My Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="!relative"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSwiper;
