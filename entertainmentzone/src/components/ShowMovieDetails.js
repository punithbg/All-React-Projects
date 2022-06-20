import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loadings from "./Loadings";
import Error from "./Error";
import { useHistory } from "react-router-dom";

const ShowMovieDetails = () => {
  const [completeMovieDetails, setCompleteMovieDetails] = useState({});

  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  const history = useHistory();
  console.log(history);

  const getCompleteMovieDetails = async () => {
    setLoad(true);
    const url = `https://www.omdbapi.com/?i=${id}&apikey=4e077ff7&plot=short`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Response === "False") {
      setError(true);
      setErrorMessage(responseJson.Error);
    } else {
      setCompleteMovieDetails(responseJson);
      setError(false);
      setTimeout(() => setLoad(false), 200);
    }
  };

  useEffect(() => {
    getCompleteMovieDetails();
  }, [id]);

  const {
    Poster,
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    imdbRating,
    BoxOffice,
  } = completeMovieDetails;

  if (error) {
    return <Error message={errorMessage} />;
  }
  if (load) {
    return <Loadings />;
  }
  //   "Year": "2014",
  // "Rated": "PG-13",
  // "Released": "01 Aug 2014",
  // "Runtime": "121 min",
  // "Genre": "Action, Adventure, Comedy",
  // "Director": "James Gunn",
  // "Writer": "James Gunn, Nicole Perlman, Dan Abnett",
  // "Actors": "Chris Pratt, Vin Diesel, Bradley Cooper",
  // "Plot": "After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the \"Guardians of the Galaxy\" to save the galaxy.",
  // "Language": "English",
  // "imdbRating": "8.0",
  // "BoxOffice": "$333,718,600",

  return (
    <div className="complete-md">
      <div className="md-poster">
        <img src={Poster} alt={Title} />
      </div>
      <div className="md-details">
        <div className="d-flex">
          <h4 className="md-title">Title : {Title}</h4>
          <h4 className="">Year : {Year}</h4>
        </div>
        <h4>Rated : {Rated}</h4>
        <h4>Released : {Released}</h4>
        <h4>Runtime : {Runtime}</h4>
        <h4>Genre : {Genre}</h4>
        <h4>Director : {Director}</h4>
        <h4>Writer : {Writer}</h4>
        <h4>Actors : {Actors}</h4>
        <h4>imdbRating : {imdbRating}</h4>
        <h4>BoxOffice : {BoxOffice}</h4>
        <p>Plot : {Plot}</p>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => history.goBack()}
          // onClick={() => history.push("/movie?color=blue")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
export default ShowMovieDetails;
