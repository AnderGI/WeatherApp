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
  //the first cards is going to be TODAY (the day the user opens the app)
  //so it should be selected
  weatherCardsSection.children[0].classList.add("selected");
}
