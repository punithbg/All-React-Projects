import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_GETPLACESDATA_RAPID_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//rapid api-keys
//861acfcc67mshb4bc7e7c324f85dp1b2526jsn7b7b8c4875eb
//fe9db73aa1msh75d1e35356ed85fp1c67b3jsn9d030275a0de
//0b2470a614mshe7a1bb35ff11361p12b842jsn7a2c7d158fda

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/find",
      {
        params: {
          lon: lng,
          lat: lat,
        },
        headers: {
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_GETWEATHERDATA_RAPID_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWebCamsData = async (lat, lng) => {
  try {
    const resp = await axios.get(
      `https://webcamstravel.p.rapidapi.com/webcams/list/nearby=${lat},${lng},100`,
      {
        params: { lang: "en", show: "webcams:image,location" },
        headers: {
          "X-RapidAPI-Host": "webcamstravel.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_GETWEATHERDATA_RAPID_API_KEY,
        },
      }
    );
    let datas = resp.data.result.webcams;

    return datas;
  } catch (error) {
    console.log(error);
  }
};
