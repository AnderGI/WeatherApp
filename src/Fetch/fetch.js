//Forecast 5 days / 3 hour interval
export function weatherForecast(cityName, key) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`,
      {
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
