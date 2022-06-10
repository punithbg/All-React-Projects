import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";

function makeDelay(ms) {
  var timer = 0;
  return function (callback) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
}
const delay = makeDelay(500);

const fakestore = async (searchValue, dispatch) => {
  const setInput = (data) => {
    dispatch({
      type: "SET_SEARCH_PRODUCTS",
      data: data,
    });
  };

  const setLoading = (load) => {
    dispatch({
      type: "SET_LOADING_VALUE",
      value: load,
    });
  };

  console.log("fakestore call begins");
  setLoading("true");
  const response = await fetch(
    `https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=${searchValue}&country=India&page=1`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
        "X-RapidAPI-Key": "a48bfa838emsh7dc15803242a34cp1487d8jsn4aae6ef4afbc",
      },
    }
  );
  const jsonData = await response.json();
  const data = jsonData.docs;
  setInput(data);
  setLoading("false");

  console.log("fakestore call ends");
  // console.log("searchvalue", searchValue);
};
const Api = () => {
  const [{ searchValue }, dispatch] = useStateValue();

  useEffect(() => {
    if (searchValue != null && searchValue != "")
      delay(() => fakestore(searchValue, dispatch));
  }, [searchValue]);

  return <div></div>;
};

export default Api;
