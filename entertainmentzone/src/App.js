import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ShowMovies from "./ShowMovies";
import ShowMovieDetails from "./components/ShowMovieDetails";
import CarouselImages from "./components/CarouselImages";
import DisplayFavourite from "./components/DisplayFavourites";

const App = () => {
  const movieShows = "movie";
  const seriesShows = "series";

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <CarouselImages />
        </Route>
        <Route path="/favourites">
          <DisplayFavourite />
        </Route>
        <Route path="/movie">
          <ShowMovies />
        </Route>
        {/* /movies?query=avengers&page=1 */}
        <Route path="/series">
          <ShowMovies />
        </Route>
        <Route path="/details/:id">
          <ShowMovieDetails />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
