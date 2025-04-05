import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
const Featured = ({data}) => {
  const sorteData= data.sort((a,b)=>b.rating-a.rating).slice(0,6);
  const  { poster, title, genre, duration, release, rating, summary }= data;
  const style = {
    mySwiper:{
      width: '100%',
    }
  };
      const [loading,setLoading]=useState(true);
      useEffect(()=>{
        const timer = setTimeout(() => {
          setLoading(false);
        }
        , 2000);
        return ()=>clearTimeout(timer);
    
      },[])
  return (
    <div>
      <h1 className='text-6xl  px-4'>Featured Movies</h1>
     <div className='p-6'>
    {
      loading?(  <div>
                               <RotatingLines
                                             visible={true}
                                             height="96"
                                             width="96"
                                             color="grey"
                                             strokeWidth="5"
                                             animationDuration="0.75"
                                             ariaLabel="rotating-lines-loading"
                                             wrapperStyle={{}}
                                             wrapperClass=""
                                             />
                            </div>):(
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
         sorteData.map((slider, index) => (
           <SwiperSlide key={index} className='relative bg-cover bg-center items-center justify-center ' style={{backgroundImage:`url(${slider.poster})`}}>
             <div className='absolute bg-black/20 inset-0'></div>
             <div className='relative z-10 text-white text-center p-4 top-1/2 transform -translate-y-1/2'>
               <h1 className='text-5xl font-bold'>{slider.title}</h1>
               
               <p className='text-xl'>Duration : {(slider.duration/60).toFixed(2)}hr</p>
               <p className='text-xl '>Rating : {slider.rating}</p>

               <Link to={`/details/movie/${slider._id}`}
               role="button" className="text-xl btn bg-[#DC2626] text-white border-none px-auto mt-4">Watch Movie</Link>
             </div>
            
           </SwiperSlide>
         ))
       }
     </Swiper>
      )
    }
     </div>
    </div>
  )
}

export default Featured
