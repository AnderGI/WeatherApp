import { WeatherCards } from "../Components/WeatherCards";
import { WeatherDetails } from "../Components/WeatherDetails";
import { $ } from "../utils/selectors";
import { renderGraph } from "./renderGraph";

let isTempInC = true;

//pagina pr
export function renderPage(JSONData) {
  renderWeatherCards(JSONData);
  //render weather info
  renderWeatherInfo(JSONData);
}

function renderWeatherCards({ dailyMinMaxTemps }) {
  const weatherCardsSection = $("section#weatherToogler");
  weatherCardsSection.replaceChildren();
  for (const entry of Object.entries(dailyMinMaxTemps)) {
    weatherCardsSection.innerHTML += WeatherCards(entry, isTempInC);
  }
  //the first cards is going to be TODAY (the day the user opens the app)
  //so it should be selected
  weatherCardsSection.children[0].classList.add("selected");
}

export function renderWeatherInfo(JSONData) {
  const { city, forecastInfo } = JSONData;
  const weatherDetailsSection = $("section#details");
  weatherDetailsSection.innerHTML = WeatherDetails(
    { city, forecastInfo },
    isTempInC
  );
  renderGraph(JSONData, isTempInC);
}
