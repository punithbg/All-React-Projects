import React, { useEffect, useState } from "react";
import CarouselImages from "./CarouselImages";
import "./Home.css";
import RollingItems from "./RollingItems";

import { row1, row2, row3 } from "./Data.js";
import Api from "../../Api.js";
import SearchedRollingItems from "./SearchedRollingItems";
import { useStateValue } from "../../StateProvider";
import Spinner from "react-spinkit";

const Home = () => {
  const [{ searchValue, setProducts, loading, searchProducts }, dispatch] =
    useStateValue();
  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    if (
      searchValue == null ||
      searchValue == "" ||
      setProducts?.length == 0 ||
      loading == "true"
    ) {
      setLoadingState(true);
    } else {
      setLoadingState(false);
    }
  }, [searchValue, setProducts]);
  return (
    <div className="home">
      <div className="home__carousel">
        <CarouselImages />
      </div>
      <Api />
      <div className="home__rollingItems">
        {loadingState ? (
          <>
            <RollingItems headerTitle="Deals Of the Day" row={row1} />
            <RollingItems headerTitle="Trending Offers" row={row2} />
            <RollingItems headerTitle="Shop Monthly Essentials" row={row3} />
          </>
        ) : (
          <>
            {loading == "true" ? (
              <div className="loading__spinner">
                <Spinner
                  name="ball-clip-rotate-multiple"
                  color="coral"
                  fadeIn="none"
                />
              </div>
            ) : (
              <>{searchProducts?.length != 0 && <SearchedRollingItems />}</>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
