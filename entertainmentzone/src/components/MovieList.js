import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  const [showDetails, setShowDetails] = useState(false);

  const [movieId, setMovieId] = useState("");
  const handleMovieDetailClick = (movie) => {
    setMovieId(movie.imdbID);
    setShowDetails(true);
  };

  const history = useHistory();

  if (showDetails) {
    // return <Redirect to={`/details/${movieId}`} />;
    history.push(`/details/${movieId}`);
  }
  return (
    <>
      {props.movies.map((movie, index) => {
        if (movie.Poster !== "N/A") {
          return (
            <div className="image-container d-flex justify-content-start m-3">
              <img src={movie.Poster} alt="movie"></img>
              <div
                onClick={() => handleMovieDetailClick(movie)}
                className="upperlay d-flex align-items-center justify-content-center"
              >
                <p>More info</p>
              </div>
              <div
                onClick={() => props.handleFavouritesClick(movie)}
                className="overlay d-flex align-items-center justify-content-center"
              >
                <FavouriteComponent />
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default MovieList;
