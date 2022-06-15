import React from "react";
import "./HomeAfterLogin.css";
import CarouselImages from "./CarouselImages";
import MovieList from "./MovieList";
import { useStateValue } from "../StateProvider";

const HomeAfterLogin = () => {
  const [{ searchValue, loading, movieList, selectedMovie }, dispatch] =
    useStateValue();
  return (
    <div className="homeafterlogin">
      {/* {selectedMovie == null && (
        <div className="home__carousel">
          <CarouselImages />
        </div>
      )} */}
      <MovieList />
    </div>
  );
};

export default HomeAfterLogin;
