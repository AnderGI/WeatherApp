import { getTempInfo } from "../utils/temperature";

export const WeatherCards = (objectEntry, isTempInC) => {
  const [key, value] = objectEntry;
  const { minTemp, maxTemp } = value;
  const minTempInfo = getTempInfo(minTemp);
  const maxTempInfo = getTempInfo(maxTemp);
  const minTempMessage = isTempInC
    ? `${minTempInfo.C} ºC`
    : `${minTempInfo.F} F`;
  const maxTempMessage = isTempInC
    ? `${maxTempInfo.C} ºC`
    : `${maxTempInfo.F} F`;
  return `
  <article class="weatherCard">
    <p><span class="light">${key}</span></p>
    <p>
        <big><span class="light">${maxTempMessage} /</span></big> 
        <small><span class="dark">${minTempMessage}</span></small>
    </p>
  </article>
    `;
};
