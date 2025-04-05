import React from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddMovies = () => {
  const navigate = useNavigate();


  const handleMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const poster = formData.get('poster');
    const title = formData.get('title');
    const genre = formData.getAll('genre');
    const duration = formData.get('duration');
    const release = formData.get('release');
    const rating = formData.get('rating');
    const summary = formData.get('summary');
    const data = { poster, title, genre, duration, release, rating, summary };
    console.log("denger",genre);
    fetch("http://localhost:5000/movies",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then((result) => {

      toast.success("Your Movie has Added Successfully");
              setTimeout(() => {
                navigate("/");
              }, 2000);
            })
  };
  return (
    <div className="hero items-start justify-center mt-60">
      <div className="hero-content  flex flex-col">
        <div className="text-center bg-[rgba(255,255,255,0.2)] backdrop-blur-sm px-10 py-10 rounded-2xl ">
          <h1 className="text-5xl font-bold text-white">Add MOVIE now!</h1>
          <p className="pt-6 text-white">
          Fill out the details below to add a new movie to the database. Provide the movie's title, genre, duration, rating, and a brief summary to give users an overview of the movie.
          </p>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleMovie}>
              <fieldset className="fieldset text-xl">
                <label className="fieldset-label">Movie Poster</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Movie Poster"
                  name="poster"
                />
                <label className="fieldset-label">Movie Title</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Movie Title"
                  name="title"
                />
                <label className="fieldset-label">Genre </label>
                <select multiple className="select select-primary w-full h-auto" name="genre">
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
                  name="duration"
                />
                <label className="fieldset-label">Release Year </label>
                <input
                  type="number"
                  className="input  w-full"
                  placeholder="Release Year "
                  name="release"
                />
                <label className="fieldset-label">Rating </label>
                <input
                  type="number"
                  className="input  w-full"
                  placeholder="Rating "
                  name="rating"
                />
                <label className="fieldset-label">Summary </label>
                <textarea 
                  type="text"
                  className="textarea w-full" 
                  placeholder="Summary "
                  name="summary"
                />
                <button className="btn btn-neutral mt-4">ADD MOVIE</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovies;
