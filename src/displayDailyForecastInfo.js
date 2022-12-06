import format from "date-fns/format";
import { es } from "date-fns/locale";
import { weatherImages } from "./weatherImages";

export function displayDayWeatherInfo(searchInputValue, b) {

   let today = new Date();
   const itemList = document.querySelector(".itemList");
   let firstDiv = false;

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

      const itemDiv = document.createElement("div");
      itemDiv.setAttribute("class","item");
      const dateHourLocationDiv = document.createElement("div");
      dateHourLocationDiv.setAttribute("id","dateHourLocation");
      const imgDiv = document.createElement("div");
      imgDiv.setAttribute("id","img");
      const infoDiv = document.createElement("div");
      infoDiv.setAttribute("id","info");
      
      
      const dayHourDate = Date.parse( weatherInfo["dt_txt"]);
      const dayHourDateFormat = format(dayHourDate,"p",{locale:es})
      const dayDescription = weatherInfo["weather"][0]["description"];
      
  
      if(!firstDiv){
        itemDiv.classList.add("activeSlide"); 
        firstDiv = true
      }

      dateHourLocationDiv.innerHTML = `
        <p>${format(today,"PPP", {locale : es})}; ${dayHourDateFormat})}</p>
        <p>${searchInputValue}</p>
        <p>${dayDescription}</p>
      `
      itemDiv.append(dateHourLocationDiv)


      imgDiv.style.cssText = ` 
      background-image: url(${weatherImages(weatherInfo["weather"][0]["main"])});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    
    `;
      itemDiv.append(imgDiv);


      const KTemp = weatherInfo["main"]["temp"];
      let CTemp = KTemp - 273.15;
      CTemp = CTemp.toFixed(2);

      const KTempFeel = weatherInfo["main"]["feels_like"];
      let CTempFeel = KTemp - 273.15;
      CTempFeel = CTempFeel.toFixed(2);

      const windSpeed = weatherInfo["wind"]["speed"];

      const humidityPercent = weatherInfo["main"]["humidity"]
    
      infoDiv.innerHTML = `
      <div><p>Temperature</p></div>
      <div><p>${CTemp} ºC / ${KTemp} K</p></div>
      <div><p>Feels Like : </p></div>
      <div><p>${CTempFeel} ºC / ${KTempFeel} K</p></div>
      <div><p>Wind : </p></div>
      <div><p>${windSpeed} m/s</p></div>
      <div><p>Humidity : </p></div>
      <div><p>${humidityPercent} %</p></div>
      `
      itemDiv.append(infoDiv);

      itemList.append(itemDiv);

    }
  }


}
