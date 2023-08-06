console.log("Hola");
import { OPEN_WEATHER_MAP } from "./Constants/constants";
import { weatherForecast } from "./Fetch/fetch";
import { groupInfoByDay } from "./JSONManipulator/groupInfoByDay";

try {
  const data = await weatherForecast("Bilbao", OPEN_WEATHER_MAP);
  console.log(groupInfoByDay(data));
} catch (err) {
  console.log(err);
}
