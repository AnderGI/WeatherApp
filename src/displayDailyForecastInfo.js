import format from "date-fns/format";
import { es } from "date-fns/locale";
export function displayDayWeatherInfo(b) {
  const nameAndDate = document.querySelector("[data-forecast='nameAndDate']");
  const dayForecast = document.querySelector("[data-forecast='day']");
  const description = document.querySelector("[data-forecast='description']");
  const imgAndTemp = document.querySelector("[data-forecast='imgAndTemp']");
let fecha = new Date();
  const nameP = document.createElement("p");
  nameP.innerHTML = b["city"]["name"] + "<br />" +  format(fecha, "PPPP", { locale: es }) +
  " " +
  format(fecha, "p", { locale: es });;

  
/*
  const dateAndHourP = document.createElement("p");
  dateAndHourP.textContent =
    format(fecha, "PPPP", { locale: es }) +
    " " +
    format(fecha, "p", { locale: es });*/

  nameAndDate.append(nameP);
 // nameAndDate.append(dateAndHourP);

 

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

  //DESCRIPTION  
  //funcion que recibe un gif de giphy


  let container2 = document.createElement('div');
  let pTemp = document.createElement('p');
  pTemp.textContent = b["list"][0]["main"]["temp"];
  container2.append(pTemp)

  /* ESTO EN DESCRIPCION
  let container3 = document.createElement('div');
  let pDesc = document.createElement('p');
  pDesc.textContent = b["list"][0]["weather"][0]["description"]
  container3.append(pDesc)*/

  imgAndTemp.append(container2)
 // imgAndTemp.append(container3)









  console.log(b)
}
