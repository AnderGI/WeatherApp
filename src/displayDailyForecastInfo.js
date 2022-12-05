import format from "date-fns/format";
import { es } from "date-fns/locale";

export function displayDayWeatherInfo(b) {

  //UNA FUNCION para el date y hour
  const dayForecast = document.getElementById("dateAndHour");
  dayForecast.innerHTML = "";
  const dateAndHourP = document.createElement("p")
  let today = new Date();
  const formatedDate = format(today, "PP", {locale: es});
  const formatedTime = format(today,"p",{locale:es});
  dateAndHourP.textContent = formatedDate + ", " + formatedTime;
  dayForecast.append(dateAndHourP);

  //descripccion de ese dia
  const dayDescriptionEl = document.getElementById("description");
  const K = b["list"][0]["main"]["temp"];
  let C = K - 273.15;
  C = C.toFixed(2)
  dayDescriptionEl.innerHTML = `
  <div>${C} Cº</div>
  <div>${K} K</div>
  <div>${b["list"][0]["weather"][0]["description"]}</div>
  <div>Humidity : ${b["list"][0]["main"]["humidity"]} %</div>
  <div>Wind speed : ${b["list"][0]["wind"]["speed"]} m/s</div>
`;



  //funcion para las horas de ese mismo dia
  const nextHoursContainer = document.getElementById("nextHoursDescription")
    for (let weatherInfo of b["list"]){
    if (
      //si la fecha de hoy es la misma que la que la api te da 12-05-2022 si es igual 12-05-2022
      today.toDateString() ===
      new Date(
        weatherInfo["dt_txt"].substring(
          0,
          weatherInfo["dt_txt"].lastIndexOf(" ")
        )
      ).toDateString()
    ) {
      const nextHoursItem = document.createElement("div");
      nextHoursItem.setAttribute("class","nextHoursItem");

      const nextHoursImg = document.createElement("div");
      nextHoursImg.setAttribute("class","nextHoursImg");

      const nextHoursDesc = document.createElement("div");
      nextHoursDesc.setAttribute("class","nextHoursDesc");

  

      nextHoursImg.style.cssText = ` 
      background-image: url(https://openweathermap.org/img/wn/${weatherInfo['weather'][0]['icon']}@2x.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    
    `;
      nextHoursItem.append(nextHoursImg);

      const dayHourDate = Date.parse( weatherInfo["dt_txt"]);
      const dayHourDateFormat = format(dayHourDate,"p",{locale:es})
      const dayDescription = weatherInfo["weather"][0]["description"];
      nextHoursDesc.textContent = dayHourDateFormat + "; " + dayDescription ;
      
      nextHoursItem.append(nextHoursDesc);
      nextHoursContainer.append(nextHoursItem);
    }
  }

  
  //b["list"][0]["dt_txt"]
  
  
  
  //const imgAndTemp = document.querySelector("#imgTempAndDate");

 
  //nameAndDate.innerHTML = ""; 
  
    //Img and temp
  //UNA FUNCION
  /*let fecha = new Date();
  const nameP = document.createElement("p");
  nameP.innerHTML =
    b["city"]["name"] +
    ", " +
    format(fecha, "p", { locale: es }) +
    "<br />" +
    format(fecha, "PP", { locale: es }) 
    ;

    let container1 = document.createElement("div");
    container1.setAttribute("id", "weatherGif");

    let container2 = document.createElement("div");
    container2.setAttribute("id", "weatherTemp");
    container2.append(nameP);

    /*
    let container3 = document.createElement("div");
    let pTemp = document.createElement("p");
    pTemp.setAttribute("id", "temp");
    pTemp.textContent = b["list"][0]["weather"][0]["description"] + " K";
    container3.append(pTemp);
     b["list"][0]["main"]["temp"]
    */

  /*  imgAndTemp.innerHTML = "";
    imgAndTemp.append(container1);
    imgAndTemp.append(container2);*/

  //FORECAST FOR THE COMPLETE DAY  
  //ASYNCRONO EN OTRA FUNCION
  /*for (let weatherInfo of b["list"]) {
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

      dayAndDateP.innerHTML =
      weatherInfo["dt_txt"].substring(
        weatherInfo["dt_txt"].lastIndexOf(" ") + 1
      ) + " : <strong>" +
      weatherInfo["weather"][0]["description"] + "</strong>" 
       /* format(
          Date.parse(
            weatherInfo["dt_txt"].substring(
              0,
              weatherInfo["dt_txt"].lastIndexOf(" ")
            )
          ),
          "PP",
          { locale: es }
        ) +
         " a las " +*/
  
      /*;
              
      



        containerDateAndHourOfDayForecast.append(dayAndDateP)

        containerImageOfDateAndhourDayForecast.style.cssText = ` 
        background-image: url(https://openweathermap.org/img/wn/${weatherInfo['weather'][0]['icon']}@2x.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      
      `;

    
      console.log(b)
      dayForecast.append(containerImageOfDateAndhourDayForecast)
      dayForecast.append(containerDateAndHourOfDayForecast);
    }
  }




  const pHumidity = document.createElement("p");

  console.log(b);*/
}
