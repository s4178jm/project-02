import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import WeatherInfo from "./components/Current_Weather/Current_Weather";
import Header from "./components/Header";

export default function App() {
  const [cityData, setCityData] = useState({});
  const [cityZip, setCityTitle] = useState("");
  const [forecastData, setForecastData] = useState({})

  //useEffect(() => {}, []);
  //${word}

  useEffect(() => {
    const apikey = `393db2c9cceb90d947389946e1acd3c2`;
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${cityZip}&units=imperial&appid=${apikey}`;
    const makeApiCall = async () => {
      const res = await fetch(cityUrl);
      const json = await res.json();
      console.log(json);
      setCityData(json);
    };
    makeApiCall();
  }, [cityZip]);

  const handleSubmit = async title => {
    //console.log("my city zip on app ", cityZip);
    setCityTitle(title);
  };

  useEffect(() => {
    
  }

  return (
    <div className="App">
      <h1>Weather APP</h1>
      <Form handleSubmit={handleSubmit} />
      <nav>
        <Header />
      </nav>
      <WeatherInfo city={cityData} />
    </div>
  );
}
