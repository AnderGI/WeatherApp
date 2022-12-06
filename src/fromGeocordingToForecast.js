import { geocording } from "./geocording";
import { forecast } from "./forecast";
import { displayDayWeatherInfo } from "./displayDailyForecastInfo";

export async function fromGeocordingToForecast(searchInputValue) {
  try {
    const promiseObj = await fetchCountry(searchInputValue, "ESP");
    const promiseUrl = forecast(promiseObj["Lat"], promiseObj["Lon"]);
    const fetchUrlPromise = await fetch(promiseUrl, {
      mode: "cors",
    });
    const jsonURLPromise = await fetchUrlPromise.json();
    displayDayWeatherInfo(searchInputValue, jsonURLPromise);
    console.log(jsonURLPromise);
   
    /*
    console.log(
      "http://openweathermap.org/img/wn/" +
        jsonURLPromise["list"][0]["weather"][0]["icon"] +
        "@2x.png"
    );*/

    //fetchGIF(jsonURLPromise["list"][0]["weather"][0]["main"]);
    /**
     * Para la foto
     * ["data"][0]["images"]["original"]["url"]
     */
  } catch (err) {
    console.log(err);
  }
}

async function fetchCountry(country, state) {
    const request = await fetch(geocording(country, state),{
      mode:"cors",
    });
    const response = await request.json();
    return {
      Lat: response[0]["lat"],
      Lon: response[0]["lon"],
    };
  }