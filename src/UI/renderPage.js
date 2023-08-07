import { WeatherCards } from "../Components/WeatherCards";
import { $ } from "../utils/selectors";
let isTempInC = true;

export function renderPage(JSONData) {
  const { city, dailyMinMaxTemps, forecastInfo } = JSONData;
  renderWeatherCards(dailyMinMaxTemps);
}

function renderWeatherCards(dailyMinMaxTemps) {
  const weatherCardsSection = $("section#weatherToogler");
  for (const entry of Object.entries(dailyMinMaxTemps)) {
    weatherCardsSection.innerHTML += WeatherCards(entry, isTempInC);
  }
}
