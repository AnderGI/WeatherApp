import { OPEN_WEATHER_MAP } from "../Constants/constants";
import { registerEvents } from "../Events/registerEvents";
import { weatherForecast } from "../Fetch/fetch";
import { getWeatherData } from "../GetFetchData/getWeatherData";
import { renderPage } from "./renderPage";

export async function renderApp(location = "Bilbao") {
  try {
    const data = await weatherForecast(location, OPEN_WEATHER_MAP); //fetch and receive the json data

    const groupedData = getWeatherData(data); //extract the needed information for the weather
    renderPage(groupedData);
    registerEvents(groupedData);

    //lista de valores maximos y minimos de temperatues
  } catch (err) {
    console.log(err);
  }
}
