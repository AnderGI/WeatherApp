import _, { fromPairs } from "lodash";
import "./style.css";
import { slideCarrousel, btnListCarrousel } from "./carrousel";
import { disableSearchSlide } from "./disableSearchSlide";
import { geocording } from "./geocording";
import { forecast } from "./forecast";

import { displayDayWeatherInfo } from "./displayDailyForecastInfo";

(function(){
 
  const btnList = document.querySelectorAll("button");
  const cityBtn = document.querySelector(".cityBtn");
  const searchInput = document.getElementById("searchCity");

  btnList.forEach((btn) => {
    btn.onclick = () => {
      slideCarrousel(btn);
      btnListCarrousel(btn);
    };
  });

  cityBtn.onclick = () => {
    disableSearchSlide()
    console.log(searchInput.value)
  }
 
})();






/*
(function () {
  const searchInput = document.getElementById("searchLocation");
  const searchDiv = document.getElementById("searchBtn");
  let searchInputValue;

  searchDiv.onclick = () => {
    searchInputValue = searchInput.value;
    searchInput.value = "";
    //UNA MANERA CON LA PROMISE CHANNING Y OTRA PODRIA SER CON LA FUNCION XX
    /*fetchCountry(searchInputValue, "ESP")
      .then((data) => forecast(data["Lat"], data["Lon"]))
      .then((url) => fetch(url))
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));*/

    //fromGeocordingToForecast();
  //};
/*
  async function fromGeocordingToForecast() {
    try {
      const promiseObj = await fetchCountry(searchInputValue, "ESP");
      const promiseUrl = forecast(promiseObj["Lat"], promiseObj["Lon"]);
      const fetchUrlPromise = await fetch(promiseUrl, {
        mode:"cors"
      });
      const jsonURLPromise = await fetchUrlPromise.json();
      //displayDayWeatherInfo(jsonURLPromise);
      console.log(jsonURLPromise)
      
      const weatherImg = document.getElementById("img");
      weatherImg.style.cssText = ` 
        background-image: url(https://openweathermap.org/img/wn/${jsonURLPromise["list"][0]["weather"][0]["icon"]}@2x.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      
      `;
      
      
      
      console.log("http://openweathermap.org/img/wn/" + jsonURLPromise["list"][0]["weather"][0]["icon"]+ "@2x.png")
      //fetchGIF(jsonURLPromise["list"][0]["weather"][0]["main"]);
      /**
       * Para la foto
       * ["data"][0]["images"]["original"]["url"]
       */
    /*} catch (err) {
      console.log(err);
    }
  }*/
/*
  async function fetchCountry(country, state) {
    const request = await fetch(geocording(country, state),{
      mode:"cors",
    });
    const response = await request.json();
    return {
      Lat: response[0]["lat"],
      Lon: response[0]["lon"],
    };
  }*/

//})();
