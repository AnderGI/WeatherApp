import "./style.css";
import { OPEN_WEATHER_MAP } from "./Constants/constants";
import { weatherForecast } from "./Fetch/fetch";
import { getJSONData } from "./JSONManipulator/jsonManipulation";
import { renderPage } from "./UI/renderPage";
import { registerEvents } from "./Events/registerEvents";

try {
  const data = await weatherForecast("Bilbao", OPEN_WEATHER_MAP);
  registerEvents();

  const groupedData = getJSONData(data);
  console.log(groupedData);
  renderPage(groupedData);

  //lista de valores maximos y minimos de temperatues
} catch (err) {
  console.log(err);
}
