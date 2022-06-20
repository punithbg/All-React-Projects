import React, { useState, useEffect } from "react";
import MovieListHeading from "./components/MovieListHeading";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import Loadings from "./components/Loadings";
import Error from "./components/Error";
import AddFavourites from "./components/AddFavourites";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function makeDelay(ms) {
  var timer = 0;
  return function (callback) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}
const delay = makeDelay(500);

const ShowMovies = () => {
  const [favourite, setFavourite] = useState([]);
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [isPageNextShown, setIsPageNextShown] = useState(false);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [movieOrSeries, setMovieOrSeries] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { pathname } = useLocation();

  function isMoviesOrSeries() {
    if (pathname.match("movie")) {
      setMovieOrSeries("movie");
    } else {
      setMovieOrSeries("series");
    }
  }

  const getMovies = async () => {
    if (!searchValue) {
      return;
    }
    setLoad(true);
    const url = `https://www.omdbapi.com/?s=${searchValue}&page=${pageNo}&apikey=4e077ff7&type=${movieOrSeries}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Response === "False") {
      setError(true);
      setErrorMessage(responseJson.Error);
    }
    if (responseJson.Search) {
      setError(false);
      setIsPageNextShown(true);
      setTimeout(() => setLoad(false), 200);
      setMovies(responseJson.Search);
    }
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourite-movies", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const findMovie = favourite.find((mov) => mov.imdbID === movie.imdbID);
    if (!findMovie) {
      const newFavouriteList = [...favourite, movie];
      setFavourite(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };
  useEffect(() => {
    const favouriteMovies = JSON.parse(
      localStorage.getItem("favourite-movies")
    );
    if (favouriteMovies) {
      setFavourite(favouriteMovies);
    }
    isMoviesOrSeries();
    setPageNo(0);
  }, [pathname]);

  useEffect(() => {
    setPageNo(1);
    delay(getMovies);
  }, [searchValue]);

  useEffect(() => {
    console.log("cleared", movieOrSeries, pageNo);
    setPageNo(0);
    setSearchValue("");
    setMovies([]);
  }, [movieOrSeries]);

  //pg change useEffect
  // useEffect(() => {
  //   getMovies();
  // }, []);

  // const history = useHistory();

  const handleNext = () => {
    setPageNo((prev) => prev + 1);
    getMovies(searchValue, pageNo);
    // history.replace(`/${movieOrSeries}/${pageNo}`);
  };
  const handlePrevious = () => {
    setPageNo((prev) => prev - 1);
    getMovies(searchValue, pageNo);
    // history.replace(`/${movieOrSeries}/${pageNo}`);
  };

  // setSeriesOrMovies(`${movieOrSeries}`);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading={movieOrSeries} />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        {error ? (
          <Error message={errorMessage} />
        ) : load ? (
          <Loadings />
        ) : (
          <MovieList
            movies={movies}
            favouriteComponent={AddFavourites}
            handleFavouritesClick={addFavouriteMovie}
          />
        )}
      </div>
      <div className="nav-btn mb-3">
        {!load && pageNo > 1 && (
          <button className="btn-prev btn btn-primary" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {!load && isPageNextShown && pageNo > 0 && (
          <button
            className="btn-next btn btn-primary ml-3"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowMovies;
