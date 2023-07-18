import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ movieData }) => {
  const navigate = useNavigate();

  const handleRedirection = (id) => {
    navigate(`/movie/details?movie_id=${id}`);
  };
  return (
    <>
      {movieData.map((card, i) => (
        <div className="card scrollable-content" key={i}>
          <img
            src={card.Poster}
            onClick={() => handleRedirection(card.imdbID)}
            alt={card.Title}
          ></img>
        </div>
      ))}
    </>
  );
};

export default Card;
