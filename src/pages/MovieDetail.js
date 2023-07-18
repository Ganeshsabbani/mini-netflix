import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/apiService";
import Navbar from "../components/Navbar";
import "../styles/MovieDetail.scss";
import Loader from "../components/Loader";

const MovieDetail = () => {
  const [movieData, setMovieData] = useState();
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("movie_id");
  const [loading, setLoading] = useState(false);

  window.scrollTo(0, 0);

  useEffect(() => {
    fetchMovieDetails(id, setMovieData, setLoading);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="details-container">
        {movieData && (
          <div className="main-content">
            <img src={movieData.Poster} alt={movieData.Title} ></img>
            <div className="description">
              <h1>Movie name : {movieData.Title}</h1>

              <div className="desc">
                <h3>Description:</h3>
                <h4> {movieData.Plot}</h4>
              </div>
              <h3>IMDB Rating :&nbsp;{movieData.imdbRating}</h3>
            </div>
          </div>
        )}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default MovieDetail;
