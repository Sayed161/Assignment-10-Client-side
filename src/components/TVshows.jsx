import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLoaderData } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const TVshows = () => {
  const data = useLoaderData();
  console.log("data",data);
  const style = {
    mySwiper:{
      width: '100%',
    }
  };
  return (
    <div>

       <div>
            <h1 className='text-6xl mt-20 text-white'>TV SHows</h1>
           <div className='p-6'>
           <Swiper style={style.mySwiper}
               breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween:20
                  },
                  480:{
                    slidesPerView: 2,
                    spaceBetween:20
                  },
                  768:{
                    slidesPerView: 3,
                    spaceBetween:20
                  },
                  1024: {
                    slidesPerView:5,
                    spaceBetween:20
                  }
                }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper h-[700px]"
            >
              {
                data.map((slider, index) =>{
                  const show = slider;
                  return (
                  <SwiperSlide key={index} className='relative bg-cover bg-center items-center justify-center ' style={{backgroundImage:`url(${show?.image?.original})`}}>
                    <div className='absolute bg-black/20 inset-0'></div>
                    <div className='relative z-10 text-white text-center p-4 top-1/2 transform -translate-y-1/2'>
                      <h1 className='text-5xl font-bold'>{show.name}</h1>
                      
                      <p className='text-xl'>Duration : {show.runtime || 0}mint</p>
                      <p className='text-xl '>Rating : {show.rating?.average}</p>
      
                      <Link to={show.url}
                      role="button" className="text-xl btn bg-[#DC2626] text-white border-none px-auto mt-4">Watch Movie</Link>
                    </div>
                   
                  </SwiperSlide>
                );
                })}
            </Swiper>
           </div>
          </div>
    </div>
  )
}

export default TVshows
