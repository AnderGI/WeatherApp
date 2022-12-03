import _, { fromPairs } from "lodash";
import "./style.css";
import { geocording } from "./geocording";
import { forecast } from "./forecast";
import format from "date-fns/format";
import { es } from "date-fns/locale";

(function () {
  const searchInput = document.getElementById("searchLocation");
  const searchBtn = document.getElementById("searchBtn");
  let searchInputValue;

  searchBtn.onclick = () => {
    searchInputValue = searchInput.value;
    searchInput.value = "";
    //UNA MANERA CON LA PROMISE CHANNING Y OTRA PODRIA SER CON LA FUNCION XX
    /*fetchCountry(searchInputValue, "ESP")
      .then((data) => forecast(data["Lat"], data["Lon"]))
      .then((url) => fetch(url))
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));*/

      fromGeocordingToForecast()
  };
  
  async function fromGeocordingToForecast(){
    try{
      const promiseObj = await fetchCountry(searchInputValue, "ESP");
      const promiseUrl =  forecast(promiseObj["Lat"], promiseObj["Lon"])
      const fetchUrlPromise = await fetch(promiseUrl)
      const jsonURLPromise = await fetchUrlPromise.json();
      displayDayWeatherInfo(jsonURLPromise)
    }catch(err){
     console.log(err)
   }
  }

  async function fetchCountry(country, state) {
    const request = await fetch(geocording(country, state));
    const response = await request.json();
    return {
      Lat: response[0]["lat"],
      Lon: response[0]["lon"],
    };
  }

  function displayDayWeatherInfo(b){
    const nameAndDate = document.querySelector("[data-forecast='nameAndDate']");
    const nameP = document.createElement('p');
    nameP.textContent = b["city"]["name"];

    let fecha = new Date();

    const dateAndHourP = document.createElement('p');
    dateAndHourP.textContent = format(fecha, 'PPPP',{locale:es}) + " " + format(fecha, 'p',{locale:es});
    
    nameAndDate.append(nameP);
    nameAndDate.append(dateAndHourP);

    console.log(b);
   
  }

  
})();
