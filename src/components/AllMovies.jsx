import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useLoaderData, useLocation } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const AllMovies = () => {
  const data = useLoaderData();
  if (!data) {
    return <div>Loading...</div>;
  }

  const [fav, setFavs] = useState(data);

  const location = useLocation();
  const [searchQuery, setQuery] = useState("");
  const filterdMovie = fav.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  console.log("lcation", location.pathname);
  const styleA =
    location.pathname === "details/all-movies" ? "text-black" : "text-white";
  const style = {
    mySwiper: {
      width: "100%",
    },
  };
  return (
    <div className={`${styleA}`}>
      <div className="mt-60">
        <div>
          <div>
            <label className="input w-[40%] flex items-center mx-auto py-7 rounded-md text-white bg-transparent border border-white">
              <svg
                className="h-[1.5em] opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="text"
                className="w-full p-2 rounded-md text-xl"
                placeholder="Search Movies..."
                onChange={handleQuery}
                value={searchQuery}
              />
            </label>
          </div>
          <div className="pt-10">
            <h1 className="text-6xl  mt-20">All Movies</h1>
            <Swiper
              style={style.mySwiper}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper h-[700px]"
            >
              {filterdMovie.map((slider, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="relative bg-cover bg-center items-center justify-center "
                    style={{ backgroundImage: `url(${slider.poster})` }}
                  >
                    <div className="absolute bg-black/20 inset-0"></div>
                    <div className="relative z-10 text-white text-center p-4 top-1/2 transform -translate-y-1/2">
                      <h1 className="text-5xl font-bold">{slider.title}</h1>

                      <p className="text-xl">
                        Duration : {(slider.duration / 60).toFixed(2)}hr
                      </p>
                      <p className="text-xl ">Rating : {slider.rating}</p>

                      <Link
                        to={`/details/movie/${slider._id}`}
                        role="button"
                        className="text-xl btn bg-[#DC2626] text-white border border-none px-auto mt-4"
                      >
                        Watch Movie
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
