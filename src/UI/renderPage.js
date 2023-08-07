import { WeatherCards } from "../Components/WeatherCards";
import { WeatherDetails } from "../Components/WeatherDetails";
import { $ } from "../utils/selectors";
let isTempInC = true;

export function renderPage(JSONData) {
  renderWeatherCards(JSONData);
  //render weather info
  renderWeatherInfo(JSONData);
}

function renderWeatherCards({ dailyMinMaxTemps }) {
  const weatherCardsSection = $("section#weatherToogler");
  for (const entry of Object.entries(dailyMinMaxTemps)) {
    weatherCardsSection.innerHTML += WeatherCards(entry, isTempInC);
  }
  //the first cards is going to be TODAY (the day the user opens the app)
  //so it should be selected
  weatherCardsSection.children[0].classList.add("selected");
}

export function renderWeatherInfo({ city, forecastInfo }) {
  const weatherDetailsSection = $("section#details");
  weatherDetailsSection.innerHTML = WeatherDetails(
    { city, forecastInfo },
    isTempInC
  );
}
