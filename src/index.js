import _, { fromPairs } from "lodash";
import "./style.css";
import { slideCarrousel, btnListCarrousel } from "./carrousel";
import { disableSearchSlide } from "./disableSearchSlide";
import { fromGeocordingToForecast } from "./fromGeocordingToForecast";


(function(){
 
  const btnList = document.querySelectorAll("button");
  const cityBtn = document.querySelector(".cityBtn");
  const searchInput = document.getElementById("searchCity");

  btnList.forEach((btn) => {
    btn.onclick = () => {
      slideCarrousel(btn);
      btnListCarrousel(btn);
    };
  });

  cityBtn.onclick = () => {
    disableSearchSlide()
    fromGeocordingToForecast(searchInput.value)
  }
 
})();



