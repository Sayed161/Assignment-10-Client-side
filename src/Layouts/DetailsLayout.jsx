import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const DetailsLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ToastContainer position="top-center" />
      <div className= "relative z-30">

      <Navbar />
      </div>

      <div className="relative h-[800px] w-full z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://pbs.twimg.com/media/D4pgj_BVUAAbCTd.jpg")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/60 to-black/90 z-10">
          <div className="flex-grow px-4 py-30 z-10">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;
