import { getWeatherIconImage } from "../UI/weatherIconImages";
import { dateFormatter } from "../utils/date";
import { $ } from "../utils/selectors";
import { getTempInfo } from "../utils/temperature";

export function WeatherDetails({ city, forecastInfo }, isTempInC) {
  const selectedWeatherCardName = $("article.selected").dataset.dayname; //get the name of the day of the weather card that is selected
  //forecast info is an object
  //the kays are the days o fthe week that will be forecasted
  //each key hols an array of objects with the weather forecast (every 3h a new forecast)
  //get the first one
  const weatherForectast = forecastInfo[selectedWeatherCardName][0];
  const { C, F } = getTempInfo(weatherForectast["temp"]);
  return `
      <div class="temps">
      ${getWeatherIconImage(
        weatherForectast["icon"].substring(
          0,
          weatherForectast["icon"].length - 1
        )
      )}
      <span class="light">${isTempInC ? C + " º" : F + " º"}</span>
    </div> 
    <div class="date">
      <big><span class="light">${city.name}, ${city.country}</span></big>
      <span class="dark">${dateFormatter(
        weatherForectast["date_txt"],
        "LLL d,  yyyy  // p"
      )}</span>
    </div>
    <div class="tabularData">
      <p>
        <big><span class="light">${weatherForectast["description"]}</spn></big>
      </p>
      <div>
        <span class="dark">Humidity</span>
        <span class="dark">${weatherForectast["humidity"]}%</span>
      </div>
      <div>
        <span class="dark">Cloudiness</span>
        <span class="dark">${weatherForectast["cloudiness"]}%</span>
      </div>
      <div>
        <span class="dark">Wind Speed</span>
        <span class="dark">${Math.round(
          weatherForectast["windSpeed"]
        )} km/h</span>
      </div>
    </div>
    `;
}
