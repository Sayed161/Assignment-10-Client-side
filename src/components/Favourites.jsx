import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLoaderData, useLocation } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const Favourites = () => {
  const data = useLoaderData();
  const {user}= useContext(AuthContext);
  if(!user||!data){
    return <div>Loading...</div>;
  }
  const user_id = user.uid;
  console.log("user_id", user_id);
  console.log("data",data);
 
  const [fav,setFavs]=useState([]);
  useEffect(
    ()=>{
        setFavs(data.filter(item=>item.user?.uid===user_id))
    }
    ,[])
 
  
  const style = {
    mySwiper:{
      width: '100%',
    }
  }; 

  const DeleteFavourite = (id)=>{
    console.log("id",id);
    const details = fav.filter(item=>item?.movie?._id === id);
    console.log("details",details);
    fetch(`https://movieflixserverside.vercel.app/favourites/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify(details)
      })
    .then(res => res.json())
    .then((data) => {console.log(data)
        if(data.deletedCount>0)
        setFavs(fav.filter(item=>item._id!==id))
    })
   .catch((err)=>console.log("object",err))
};
  return (
    <div className='text-white'>

       <div>
            <h1 className='text-6xl  mt-20'>Favourites</h1>
            <div>
                 
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
                     fav.map((slider, index) => 
                     { 
                        const movie= slider.movie;
                        return  (
                       
                       <SwiperSlide key={index} className='relative bg-cover bg-center items-center justify-center ' style={{backgroundImage:`url(${movie.poster})`}}>
                         <div className='absolute bg-black/20 inset-0'></div>
                         <div className='relative z-10 text-white text-center p-4 top-1/2 transform -translate-y-1/2'>
                           <h1 className='text-5xl font-bold'>{movie.title}</h1>
                           
                           <p className='text-xl'>Duration : {(movie.duration/60).toFixed(2)}hr</p>
                           <p className='text-xl '>Rating : {movie.rating}</p>
           
                           <Link to={`/details/movie/${movie._id}`}
                           role="button" className="text-xl btn bg-[#DC2626] text-white border-none px-auto mt-4">Watch Movie</Link>
                           <button onClick={()=>DeleteFavourite(slider._id)} className='text-xl btn bg-[#DC2626] text-white border-none px-auto mt-4 mx-4'>Delete Favourite</button>
                         </div>
                        
                       </SwiperSlide>
                     )})
                   }
                 </Swiper>
                </div>
               </div>
          </div>
    </div>
  )
}

export default Favourites
