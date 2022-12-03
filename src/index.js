import _, { fromPairs } from "lodash";
import "./style.css";
import { geocording } from "./geocording";
import { forecast } from "./forecast";

import { displayDayWeatherInfo } from "./displayDailyForecastInfo";

(function () {
  const searchInput = document.getElementById("searchLocation");
  const searchBtn = document.getElementById("searchBtn");
  let searchInputValue;

  searchBtn.onclick = () => {
    searchInputValue = searchInput.value;
    searchInput.value = "";
    //UNA MANERA CON LA PROMISE CHANNING Y OTRA PODRIA SER CON LA FUNCION XX
    /*fetchCountry(searchInputValue, "ESP")
      .then((data) => forecast(data["Lat"], data["Lon"]))
      .then((url) => fetch(url))
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));*/

    fromGeocordingToForecast();
  };

  async function fromGeocordingToForecast() {
    try {
      const promiseObj = await fetchCountry(searchInputValue, "ESP");
      const promiseUrl = forecast(promiseObj["Lat"], promiseObj["Lon"]);
      const fetchUrlPromise = await fetch(promiseUrl);
      const jsonURLPromise = await fetchUrlPromise.json();
      displayDayWeatherInfo(jsonURLPromise);
      fetchGIF(jsonURLPromise["list"][0]["weather"][0]["main"]);
      /**
       * Para la foto
       * ["data"][0]["images"]["original"]["url"]
       */
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchCountry(country, state) {
    const request = await fetch(geocording(country, state));
    const response = await request.json();
    return {
      Lat: response[0]["lat"],
      Lon: response[0]["lon"],
    };
  }

  async function fetchGIF(w) {
    /**
     * https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=m8EuLgASSwTOUTEQBCpibavt4qDnKPun&limit=5
     */
    const part1 = "https://api.giphy.com/v1/gifs/search?q=";
    const word = w;
    const part2 = "&api_key=m8EuLgASSwTOUTEQBCpibavt4qDnKPun&limit=5";

    const response = await fetch(part1 + word + part2);
    const json = await response.json();

    ///////

    const weatherGif = document.getElementById("weatherGif");

    weatherGif.style.cssText = ` 
      background-image: url(${json["data"][0]["images"]["original"]["url"]});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    
    `;

    /////
    console.log(json);
  }
})();
