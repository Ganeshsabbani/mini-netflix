import React, { useRef } from "react";
import { MOVIE_DATA } from "../Utils/MovieData";
import Card from "./Card";

const MovieList = () => {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100; // Adjust the scroll distance as per your requirement
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100; // Adjust the scroll distance as per your requirement
    }
  };
  return (
    <div className="container-list">
      <h1>All Movies</h1>
      <div className="row-div">
      <div className="left-arrow-section">
        <button className="scroll-button left" onClick={handleScrollLeft}>
          &lt;
        </button>
      </div>
      <div className="row-list scrollable-container" ref={containerRef}>
        <Card movieData={MOVIE_DATA} />
      </div>
      <div className="right-arrow-section">
        <button className="scroll-button right" onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default MovieList;
