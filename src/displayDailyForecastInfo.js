import format from "date-fns/format";
import { es } from "date-fns/locale";

export function displayDayWeatherInfo(b) {
  const nameAndDate = document.querySelector("[data-forecast='nameAndDate']");
  const dayForecast = document.querySelector("[data-forecast='day']");
  const imgAndTemp = document.querySelector("[data-forecast='imgAndTemp']");

  let fecha = new Date();
  const nameP = document.createElement("p");
  nameP.innerHTML =
    b["city"]["name"] +
    "<br />" +
    format(fecha, "PPPP", { locale: es }) +
    " " +
    format(fecha, "p", { locale: es });


    nameAndDate.append(nameP);
  
  //FORECAST FOR THE COMPLETE DAY
  for (let weatherInfo of b["list"]) {
    if (
      //si la fecha de hoy es la misma que la que la api te da 12-05-2022 si es igual 12-05-2022
      fecha.toDateString() ===
      new Date(
        weatherInfo["dt_txt"].substring(
          0,
          weatherInfo["dt_txt"].lastIndexOf(" ")
        )
      ).toDateString()
    ) {
      const container = document.createElement("div");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      p1.textContent = weatherInfo["dt_txt"].substring(
        0,
        weatherInfo["dt_txt"].lastIndexOf(" ")
      );

      container.append(p1);

      p2.textContent = weatherInfo["dt_txt"].substring(
        weatherInfo["dt_txt"].lastIndexOf(" ") + 1
      );

      container.append(p2);

      dayForecast.append(container);
    }
  }

  //Img and temp
  //funcion que recibe un gif de giphy

  let container1 = document.createElement("div");
  container1.setAttribute("id", "weatherGif");
  let container2 = document.createElement("div");
  let pTemp = document.createElement("p");
  pTemp.setAttribute("id","temp")
  pTemp.textContent = b["list"][0]["main"]["temp"];
  container2.append(pTemp);

  imgAndTemp.append(container1);
  imgAndTemp.append(container2);

   // ESTO EN DESCRIPCION
  
  const description = document.querySelector("[data-forecast='description']");
  const pDescription = document.createElement('div');
  pDescription.innerHTML = `
  <ul>
    <li>${b["list"][0]["weather"][0]["description"]}</li>
    <li>Humidity : ${b["list"][0]["main"]["humidity"]} %</li>
    <li>Wind speed : ${b["list"][0]["wind"]["speed"]} m/s</li>
  </ul>
  `
  
  
  
  
  description.append(pDescription);

  const pHumidity = document.createElement('p')


  console.log(b);
}
