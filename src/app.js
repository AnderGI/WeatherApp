console.log("Hola");
import "./style.css";
import { OPEN_WEATHER_MAP } from "./Constants/constants";
import { weatherForecast } from "./Fetch/fetch";
import { getJSONData } from "./JSONManipulator/jsonManipulation";

try {
  const data = await weatherForecast("Bilbao", OPEN_WEATHER_MAP);
  const groupedData = getJSONData(data);
  console.log(groupedData);

  //lista de valores maximos y minimos de temperatues
} catch (err) {
  console.log(err);
}
