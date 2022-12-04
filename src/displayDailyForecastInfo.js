import format from "date-fns/format";
import { es } from "date-fns/locale";

export function displayDayWeatherInfo(b) {

  //UNA FUNCION
  const nameAndDate = document.querySelector("#nameAndDate");
  const dayForecast = document.querySelector("#day");
  dayForecast.innerHTML = "";
  const imgAndTemp = document.querySelector("#imgAndTemp");

  let fecha = new Date();
  const nameP = document.createElement("p");
  nameP.innerHTML =
    b["city"]["name"] +
    ", " +
    format(fecha, "p", { locale: es }) +
    "<br />" +
    format(fecha, "PPPP", { locale: es }) 
    ;

  nameAndDate.innerHTML = "";
  nameAndDate.append(nameP);

  //FORECAST FOR THE COMPLETE DAY  
  //ASYNCRONO EN OTRA FUNCION
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
      const containerDateAndHourOfDayForecast = document.createElement("div");
      containerDateAndHourOfDayForecast.setAttribute("class","dateAndHourDayForecast")
      const containerImageOfDateAndhourDayForecast = document.createElement("div")
      const dayAndDateP = document.createElement("p");

      dayAndDateP.textContent =
        format(
          Date.parse(
            weatherInfo["dt_txt"].substring(
              0,
              weatherInfo["dt_txt"].lastIndexOf(" ")
            )
          ),
          "PPPP",
          { locale: es }
        ) +
        " a las " + ". " +
  
            weatherInfo["dt_txt"].substring(
              weatherInfo["dt_txt"].lastIndexOf(" ") + 1
            ) + weatherInfo["weather"][0]["description"]
      ;
              
      



        containerDateAndHourOfDayForecast.append(dayAndDateP)

        containerImageOfDateAndhourDayForecast.style.cssText = ` 
        background-image: url(http://openweathermap.org/img/wn/${weatherInfo['weather'][0]['icon']}@2x.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      
      `;

    
      console.log(b)
      dayForecast.append(containerImageOfDateAndhourDayForecast)
      dayForecast.append(containerDateAndHourOfDayForecast);
    }
  }

  //Img and temp
  //funcion que recibe un gif de giphy
  //UNA FUNCION
  let container1 = document.createElement("div");
  container1.setAttribute("id", "weatherGif");

  let container2 = document.createElement("div");
  container2.setAttribute("id", "weatherTemp");
  let pTemp = document.createElement("p");
  pTemp.setAttribute("id", "temp");
  pTemp.textContent = b["list"][0]["main"]["temp"] + " K";
  container2.append(pTemp);

  imgAndTemp.innerHTML = "";
  imgAndTemp.append(container1);
  imgAndTemp.append(container2);

  // ESTO EN DESCRIPCION
  //OTRA FUNCION
  const description = document.querySelector("#description");
  const pDescription = document.createElement("div");
  pDescription.innerHTML = `
  <ul>
    <li>${b["list"][0]["weather"][0]["description"]}</li>
    <li>Humidity : ${b["list"][0]["main"]["humidity"]} %</li>
    <li>Wind speed : ${b["list"][0]["wind"]["speed"]} m/s</li>
  </ul>
  `;

  description.innerHTML = "";
  description.appendChild(pDescription);

  const pHumidity = document.createElement("p");

  console.log(b);
}
