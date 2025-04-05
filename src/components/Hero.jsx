import React, { useRef, useState } from 'react'
import Featured from './Featured'
import Action from './Action'
import Upcoming from './Upcoming'
import { useLoaderData } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Hero = () => {
  const sliders = [
    {
      image: "https://wallpaperswide.com/download/clash_of_the_titans_2010_movie-wallpaper-1920x1080.jpg",
      title: "Clash of the Titans",
      description: "A story of gods and men, where destiny is rewritten through battles.",
    },
    {
      image: "https://pbs.twimg.com/media/D4pgj_BVUAAbCTd.jpg",
      title: "Avengers: Endgame",
      description: "The ultimate battle against Thanos to restore balance in the universe.",
    },
    {
      image: "https://wallpaperswide.com/download/the_dark_knight_movie-wallpaper-1920x1200.jpg",
      title: "The Dark Knight",
      description: "Gotham’s silent guardian fights against chaos and crime.",
    }
  ];
 const data = useLoaderData();
  return (
    <div className='bg-white dark:bg-black text-black dark:text-white'>
      <Swiper pagination={true} modules={[Pagination]} className="relative mySwiper h-screen w-full">
        {
          sliders.map((slider, index) => (
            <SwiperSlide key={index} className='relative flex bg-cover bg-center h-96 lg:h-screen items-center justify-center' style={{backgroundImage:`url(${slider.image})`}}>
              <div className='absolute bg-black/60 inset-0'></div>
              <div className='relative z-10 text-white text-center p-4 top-1/2 transform -translate-y-1/2'>
                <h1 className='text-5xl font-bold'>{slider.title}</h1>
                
                <p className='text-xl mt-4'>{slider.description}</p>
                <Link tabIndex={0}
                role="button" className="text-xl btn bg-[#DC2626] text-white border-none px-16 mt-4">Watch Movie</Link>
              </div>
             
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Featured data={data}/>
      <Action data={data}></Action>
      <Upcoming data={data}></Upcoming>
    </div>
  )
}

export default Hero
