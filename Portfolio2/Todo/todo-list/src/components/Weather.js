import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";
import { BsCloudFog } from "react-icons/bs";

// const WeatherTest = () => {
//   const [weather, setWeather] = useState("");
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=05352a2d3a0f40a26d90ac7bf2590a40`;

//   // 날씨 가져오기
//   axios.get(url).then(responseData => {
//     const data = responseData.data;
//     setWeather({
//       id: data.weather[0].id,
//       temperature: data.main.temp,
//       main: data.weather[0].main,
//       loading: false,
//     });
//   });

const TestW = () => {
  const [result, setResult] = useState(null);

  const weather = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=05352a2d3a0f40a26d90ac7bf2590a40`;
    let response = await fetch(url);
    let data = await response.json();
    setResult(data);
    // console.log("현재날씨는?", result);
    // let iconId =
    //   result.weather[0].id === 800
    //     ? 0
    //     : (parseInt(result.weather[0].id) / 100).toFixed(0);
  };

  const selectIcon = () => {
    let iconId =
      result.weather[0].id === 800
        ? 0
        : (parseInt(result.weather[0].id) / 100).toFixed(0);

    // console.log(iconId);
    switch (iconId) {
      case 0:
        return <TiWeatherSunny color="red" />;
      case 2:
        return <TiWeatherStormy color="black" />;
      case 3:
        return <TiWeatherShower color="blue" />;
      case 5:
        return <TiWeatherDownpour color="navy" />;
      case 6:
        return <TiWeatherSnow color="white" />;
      case 7:
        return <BsCloudFog color="white" />;
      case 8:
        return <TiWeatherCloudy color="white" />;
    }
    // console.log(result.weather[0].id);
    // console.log(iconId);
  };

  useEffect(() => {
    weather();
  }, []);

  return (
    <>
      {result !== null && (
        <div className="weather-box">
          <div className="city">
            <span className="city-name">{result.name}</span>
            <span className="temp">
              {Math.round((result.main.temp - 273.15) * 10) / 10} ℃
            </span>
          </div>
          <div className="weather-img">{selectIcon()}</div>
          <div className="sky">{result.weather[0].main}</div>
        </div>
      )}
    </>
  );
};

export default TestW;
