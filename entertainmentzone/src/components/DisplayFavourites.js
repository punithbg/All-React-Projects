import React from "react";
import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import RemoveFavourites from "./RemoveFavourites";

const DisplayFavourite = () => {
  const [favourite, setFavourite] = useState([]);
  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourite-movies", JSON.stringify(items));
  };

  useEffect(() => {
    const favouriteMovies = JSON.parse(
      localStorage.getItem("favourite-movies")
    );
    if (favouriteMovies) {
      setFavourite(favouriteMovies);
    }
  }, []);

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourite.filter(
      (mov) => mov.imdbID != movie.imdbID
    );
    setFavourite(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourite" />
      </div>
      <div className="row">
        <MovieList
          movies={favourite}
          favouriteComponent={RemoveFavourites}
          handleFavouritesClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
};
export default DisplayFavourite;
