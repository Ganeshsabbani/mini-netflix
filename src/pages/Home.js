import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <MovieList />
    </>
  );
};

export default Home;
