import { getDateName } from "../utils/date";
import { getTempInfo } from "../utils/temperature";

export const groupInfoByDay = ({ city, list }) => {
  const groupedInfo = {};
  //Mientras estemos en los limites del array
  let i = 0;
  while (i < list.length) {
    //coger del primer elemento el nombre del dia
    let day = getDateName(list[i]["dt_txt"]);
    //mirar si el dia no esta en el objeto
    //si no esta inicializar un array donde se guardara la informacion de cada dia
    if (!(day in groupedInfo)) groupedInfo[day] = [];
    //guardar informacion en objeto
    while (i < list.length && day === getDateName(list[i]["dt_txt"])) {
      const forecastInfo = {
        date_txt: list[i]["dt_txt"],
        temp: getTempInfo(list[i]["main"]["temp"]),
        tempMax: getTempInfo(list[i]["main"]["temp_max"]),
        tempMin: getTempInfo(list[i]["main"]["temp_min"]),
        humidity: list[i]["main"]["humidity"], //humedad relativa en %
        windSpeed:
          list[i]["wind"]["speed"] /*m / s*/ *
          (1 / 1000) /* 1km === 10000m */ *
          (3600 / 1) /* 1h === 3600s */, // km / h
        cloudiness: list[i]["clouds"]["all"], // %
      };
      groupedInfo[day].push(forecastInfo);
      i++;
    }
  }
  return Object.assign(
    {},
    {
      name: city.name,
      country: city.country,
      sunrise: city.sunrise,
      sunset: city.sunset,
      timezone: city.timezone,
    },
    {
      forecastInfo: groupedInfo,
    }
  );
};
