import { getTempInfo } from "../utils/temperature";

export const WeatherCards = (objectEntry, isTempInC) => {
  const [key, value] = objectEntry;
  const { minTemp, maxTemp } = value;
  const minTempInfo = getTempInfo(minTemp);
  const maxTempInfo = getTempInfo(maxTemp);
  const minTempMessage = isTempInC
    ? `${minTempInfo.C} º`
    : `${minTempInfo.F} º`;
  const maxTempMessage = isTempInC
    ? `${maxTempInfo.C} º`
    : `${maxTempInfo.F} º`;
  return `
  <article class="weatherCard" data-dayName=${key}>
    <p><span class="light">${key}</span></p>
    <p>
        <big><span class="light">${maxTempMessage} /</span></big> 
        <small><span class="dark">${minTempMessage}</span></small>
    </p>
  </article>
    `;
};
