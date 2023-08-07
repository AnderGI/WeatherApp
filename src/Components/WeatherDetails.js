import { getWeatherIconImage } from "../UI/weatherIconImages";
import { dateFormatter } from "../utils/date";
import { $ } from "../utils/selectors";
import { getTempInfo } from "../utils/temperature";

export function WeatherDetails({ city, forecastInfo }, isTempInC) {
  const selectedArticleName = $("article.selected").dataset.dayname;
  const weatherForectast = forecastInfo[selectedArticleName][0];
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
        "LLL d,  yyyy"
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
