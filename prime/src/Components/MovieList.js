import React, { useEffect, useState } from "react";
import "./MovieCommon.css";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import Movie from "./Movie";
import Youtube from "react-youtube";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [
    { searchValue, loading, movieList, selectedMovie, category },
    dispatch,
  ] = useStateValue();

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [readmore, setReadmore] = useState(true);
  const [insideWidth, setInsideWidth] = useState(window.innerWidth);

  useEffect(() => {
    setInsideWidth(window.innerWidth);
    console.log("inside use effect", insideWidth);
  }, [window.innerWidth]);

  console.log("wid", window.innerWidth);
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const SEARCH_API = MOVIE_API + `search/${category}`;
  const DISCOVER_API = MOVIE_API + `discover/${category}`;
  const API_KEY = "ffcd66e2d1c25532eaa208710bbfcb5e";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetchMovies();
    setPlaying(false);
    setReadmore(true);
  }, [searchValue, category]);

  const fetchMovies = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const { data } = await axios.get(
      `${searchValue ? SEARCH_API : DISCOVER_API}`,
      {
        params: {
          api_key: API_KEY,
          query: searchValue,
        },
      }
    );

    dispatch({
      type: "SET_MOVIE_LIST",
      data: data.results,
    });
    dispatch({
      type: "SET_SELECTED_MOVIE",
      data: data.results[0],
    });

    if (data.results.length) {
      await fetchMovie(data.results[0].id);
    }
  };

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${MOVIE_API}${category}/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        // (vid) => vid.name === "Official Trailer"
        (vid) => vid.name.match(/trailer/i)
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }

    dispatch({
      type: "SET_SELECTED_MOVIE",
      data: data,
    });
  };
  console.log({ selectedMovie });

  const selectMovie = (movie) => {
    fetchMovie(movie.id);
    setPlaying(false);
    setReadmore(true);
    dispatch({
      type: "SET_SELECTED_MOVIE",
      data: movie,
    });
    window.scrollTo(0, 0);
    console.log(selectedMovie);
  };

  const renderMovies = () =>
    movieList.map((movie) => (
      <Movie selectMovie={selectMovie} key={movie.id} movie={movie} />
    ));

  return (
    <div className="movielist">
      {movieList?.length ? (
        <main>
          {selectedMovie ? (
            <div
              className="poster"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${selectedMovie.backdrop_path})`,
              }}
            >
              {playing ? (
                <>
                  <Youtube
                    videoId={trailer.key}
                    className={"youtube "}
                    containerClassName={"youtube-container "}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button
                    onClick={() => setPlaying(false)}
                    className={"button close-video"}
                  >
                    Close
                  </button>
                </>
              ) : (
                <div className="center-max-size">
                  <div className="poster-content">
                    {trailer ? (
                      <button
                        className={"button play-video"}
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1>
                      {category == "movie"
                        ? selectedMovie.title
                        : selectedMovie.name}
                    </h1>
                    <p>
                      {insideWidth < 800 ? (
                        <>
                          {readmore ? (
                            <span>
                              {selectedMovie.overview.substring(0, 150) + "..."}
                              {"\u00A0"}
                              {"\u00A0"}
                              <span
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => setReadmore(!readmore)}
                              >
                                Click here to Read More
                              </span>
                            </span>
                          ) : (
                            <span>
                              {selectedMovie.overview}
                              {"\u00A0"}
                              {"\u00A0"}
                              <span
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={() => setReadmore(!readmore)}
                              >
                                Read Less
                              </span>
                            </span>
                          )}
                        </>
                      ) : (
                        selectedMovie.overview
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
          <div className={"center-max-size container"}>{renderMovies()}</div>
        </main>
      ) : (
        "Sorry, no movies found"
      )}
    </div>
  );
};

export default MovieList;
