import React from "react";

const AddMovies = () => {
  const handleMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const release = form.release.value;
    const rating = form.rating.value;
    const summary = form.summary.value;
    const data = { poster, title, genre, duration, release, rating, summary };
    fetch("http://localhost:5000/movies",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold">Add MOVIE now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
                </select>
                <label className="fieldset-label">Duration </label>
                <input
                  type="number"
                  className="input  w-full"
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
                <input
                  type="text"
                  className="input  w-full"
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
