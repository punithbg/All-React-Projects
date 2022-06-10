import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData, getWeatherData, getWebCamsData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function makeDelay(ms) {
  var timer = 0;
  return function (callback) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}
const delay = makeDelay(1000);

const App = () => {
  function apiCall() {
    getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
      setWeatherData(data)
    );

    getWebCamsData(coordinates.lat, coordinates.lng).then((datas) => {
      setWebcamData(datas);
    });

    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }

  const [webcamData, setWebcamData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredplaces = places.filter(
      (place) => Number(place.rating) > rating
    );
    setFilteredPlaces(filteredplaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    delay(apiCall);
  }, [type, coordinates, bounds]);

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid
        container
        spacing={3}
        style={{ marginTop: "10px", width: "100%", marginLeft: "0px" }}
      >
        <Grid item xs={12} md={4} style={{ marginTop: "-30px" }}>
          <List
            isLoading={isLoading}
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
            webcamData={webcamData}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
