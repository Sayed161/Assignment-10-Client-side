import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { RotatingLines } from 'react-loader-spinner'
const MovieDetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user || !movie) {
    return <div>  render(<RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />)</div>;
  }
  const { _id, poster, title, genre, duration, release, rating, summary } =
    movie;
  const details = {
    movie: movie,
    user: user,
  };
  const [showfull, setShowfull] = useState(false);
  const handleFavourite = () => {
    fetch("https://movieflixserverside.vercel.app/favourites/")
      .then((res) => res.json())
      .then((favs) => {
        const alreadyInFavs = favs.some((fav) => {
          return fav.movie?._id === movie._id && fav.user?.uid === user.uid;
        });
        if (alreadyInFavs) {
          toast.error("This movie is already in your favorite");
          return;
        }
        fetch("https://movieflixserverside.vercel.app/favourites/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("You have added this movie to your favorite");
            setTimeout(() => {
              navigate("/details/favourites");
            }, 2000);
          })
          .catch((err) => console.log("object", err));
      });
  };
  const handleDelete = () => {
    fetch(`https://movieflixserverside.vercel.app/movies/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      toast.success("Your Movie has Deleted Successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  };

  const word = summary.split("");
  return (
    <div className="bg-[rgba(0,0,0,0.2)] backdrop-blur-sm px-10 py-10 rounded-2xl mt-40">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-xl">
            Do you want really want to delete this movie?
          </h3>
          <div className="modal-action">
            <form method="dialog" className="flex flex-row mx-auto gap-4">
              <button
                onClick={handleDelete}
                className="btn bg-[#DC2626] text-xl"
              >
                Delete
              </button>
              <button className="btn btn-success text-xl">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-shrink-0">
          <img
            src={poster}
            className="rounded-lg shadow-2xl w-full lg:w-[600px] h-[420px] object-cover"
          />
        </div>
        <div className="text-white text-center lg:text-left bg-[rgba(0,0,0,0.6)] backdrop-blur-sm px-10 py-10 rounded-2xl flex-1">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-2xl">Duration : {(duration / 60).toFixed(2)}hr</p>
          <p className="text-2xl">Realse year : {release}</p>
          <p className="text-2xl">Rating : {rating}</p>
          <p className="text-xl">
            {" "}
            {showfull ? summary : word.slice(0, 220).join("")}
            {word.length > 220 && (
              <button
                onClick={() => setShowfull(!showfull)}
                className="text-blue-600 underline ml-2 text-sm"
              >
                {showfull ? "Show Less" : "Show More"}
              </button>
            )}
          </p>

          {genre.map((all) => (
            <button className="btn btn-accent mr-4 text-xl"> {all}</button>
          ))}
          <div className="">
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              role="button"
              className="text-xl btn bg-[#DC2626] text-white border-none px-auto mt-4 mr-4"
            >
              Delete Movie
            </button>
            <Link
              to={`/details/update-movie/${_id}`}
              role="button"
              className="text-xl btn bg-[#DC2626] text-white border-none px-auto mt-4 mr-4"
            >
              Update Movie
            </Link>
            <button
              onClick={handleFavourite}
              role="button"
              className="text-xl btn bg-[#DC2626] text-white border-none px-auto mt-4"
            >
              Add To Favourite
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MovieDetails;
