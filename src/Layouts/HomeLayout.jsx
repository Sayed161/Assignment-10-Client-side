import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/footer'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const HomeLayout = () => {

  return (
    <div>
      <div>
         <ToastContainer position="top-center"/>
        <Navbar/>
        
      <Outlet>
      
      </Outlet>
       
        </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default HomeLayout
