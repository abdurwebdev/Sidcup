import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div>
      <Swiper 
        pagination={true} 
        modules={[Pagination]}
        spaceBetween={60}
        autoplay={true}
        slidesPerView={1}
        className="mySwiper z-[60] rounded-3xl shadow-2xl bg-black  text-black md:h-[500px] lg:h-72 xl:h-96 bg-transparent"
        style={{backgroundColor:'#000'}}
      >
        <SwiperSlide className=" bg-transparent rounded-3xl ">
          <img className='backdrop-blur-3xl  rounded-3xl' src="https://plus.unsplash.com/premium_photo-1683120721239-ac9a0a3b558c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1 className='absolute xl:text-xl text-xs sm:text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium deserunt eveniet quasi accusantium? Optio tempore magnam iusto in. Quam aut a, dolor quo consequatur animi exercitationem excepturi perspiciatis. Aperiam!</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg-transparent rounded-3xl ">
        <img className='backdrop-blur-3xl  rounded-3xl' src="https://images.unsplash.com/photo-1562204320-31975a5e09ce?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='absolute xl:text-xl text-xs sm:text-xl  font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium deserunt eveniet quasi accusantium? Optio tempore magnam iusto in. Quam aut a, dolor quo consequatur animi exercitationem excepturi perspiciatis. Aperiam!</h1>
        </SwiperSlide>
        <SwiperSlide className=" bg-transparent rounded-3xl">
        <img className='backdrop-blur-3xl  rounded-3xl' src="https://plus.unsplash.com/premium_photo-1679710943658-1565004c00ac?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='absolute xl:text-xl text-xs sm:text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium deserunt eveniet quasi accusantium? Optio tempore magnam iusto in. Quam aut a, dolor quo consequatur animi exercitationem excepturi perspiciatis. Aperiam!</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
