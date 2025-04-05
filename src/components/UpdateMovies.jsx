import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const UpdateMovies = () => {
    const movie = useLoaderData();
    const { poster, title, genre, duration, release, rating, summary } = movie;
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        poster: poster,
        title: title,
        genre: genre.map((g) => g.name),
        duration: duration,
        release: release,
        rating: rating,
        summary: summary,
      }
    });
  const handleMovie = (data) => {

    fetch(`http://localhost:5000/movies/${movie._id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then((result) => {
              console.log(result);
      toast.success("Your Movie has Updated Successfully");
              setTimeout(() => {
                navigate("/");
              }, 2000);
            })
  };
  return (
    <div className="hero mt-60">
      <div className="hero-content flex flex-col">
        <div className="text-center bg-[rgba(0,0,0,0.2)] backdrop-blur-sm px-10 py-10 rounded-2xl">
          <h1 className="text-5xl font-bold text-white">Update MOVIE now!</h1>
          <p className="py-6 text-white">
          Fill out the details below to Update the  movie to the database. Provide the movie's title, genre, duration, rating, and a brief summary to give users an overview of the movie.
          </p>
        </div>
      <div className="card bg-base-100 w-full shadow-2xl">
        <div className="card-body">
          <form action="" onSubmit={handleSubmit(handleMovie)}>
            <fieldset className="fieldset text-xl">
              <label className="fieldset-label">Movie Poster</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Movie Poster"
                {...register("poster", { required: true })}
              />
              <label className="fieldset-label">Movie Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Movie Title"
                {...register("title", { required: true })}
              />
              <label className="fieldset-label">Genre </label>
              <select multiple className="select select-primary w-full h-auto" name="genre" defaultValue={genre} {...register("genre")}>
                <option value="Romantic">Romantic</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Sci-fy">Sci-fy</option>
              </select>
              <label className="fieldset-label">Duration </label>
              <input
                type="number"
                className="input w-full"
                placeholder="Duration "
                {...register("duration", { required: true })}

              />
              <label className="fieldset-label">Release Year </label>
              <input
                type="number"
                className="input  w-full"
                placeholder="Release Year "
                {...register("release", { required: true })}
              />
              <label className="fieldset-label">Rating </label>
              <input
                type="number"
                className="input w-full"
                placeholder="Rating"
                {...register("rating", { required: true })}
              />
              <label className="fieldset-label">Summary </label>
              <textarea
                type="text"
                className="textarea w-full"
                placeholder="Summary "
                
                {...register("summary", { required: true })}
              />
              <button className="btn btn-neutral mt-4">Update MOVIE</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateMovies
