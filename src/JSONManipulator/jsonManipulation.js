import { getDateName } from "../utils/date";

export const getJSONData = ({ city, list }) => {
  return Object.assign(
    {},
    {
      city: getCityInfo({ city, list }),
    },
    getFullForecastInfo({ city, list })
  );
};

function getCityInfo({ city }) {
  return Object.assign(
    {},
    {
      name: city.name,
      country: city.country,
      sunrise: city.sunrise,
      sunset: city.sunset,
      timezone: city.timezone,
    }
  );
}

//Forecast info for 5 days every 3 hours
function getFullForecastInfo({ list }) {
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
        temp: list[i]["main"]["temp"],
        tempMax: list[i]["main"]["temp_max"],
        tempMin: list[i]["main"]["temp_min"],
        humidity: list[i]["main"]["humidity"], //humedad relativa en %
        windSpeed:
          list[i]["wind"]["speed"] /*m / s*/ *
          (1 / 1000) /* 1km === 10000m */ *
          (3600 / 1) /* 1h === 3600s */, // km / h
        cloudiness: list[i]["clouds"]["all"], // %
        description: list[i]["weather"][0]["description"],
        icon: list[i]["weather"][0]["icon"],
      };
      groupedInfo[day].push(forecastInfo);
      i++;
    }
  }
  return Object.assign(
    {},
    {
      forecastInfo: groupedInfo,
    },
    {
      dailyMinMaxTemps: dailyMinMaxTemp(groupedInfo),
    }
  );
}

//This function will create an object with property : day of the week and value {minimumTempOfThatDay, maximumTempOfThatDay}
function dailyMinMaxTemp(forecastInfoArray) {
  const minMaxTemObj = {};

  Object.keys(forecastInfoArray).forEach((property) => {
    const innerForecastArray = forecastInfoArray[property];
    const minMaxValue = getMinAndMaximunTem(innerForecastArray);
    minMaxTemObj[property] = minMaxValue;
  });

  return minMaxTemObj;
}

//This function will from one array of objects get the lowest and highest temperature values in kelvin
function getMinAndMaximunTem(listOfDailyForecastObjects) {
  const minMaxObj = listOfDailyForecastObjects.reduce(
    (acc, obj) => {
      if (acc.minTemp > obj.tempMin) {
        acc.minTemp = obj.tempMin;
      }
      if (acc.maxTemp < obj.tempMax) {
        acc.maxTemp = obj.tempMax;
      }
      return acc;
    },
    {
      minTemp: listOfDailyForecastObjects[0].tempMin,
      maxTemp: listOfDailyForecastObjects[0].tempMax,
    }
  );

  return minMaxObj;
}
