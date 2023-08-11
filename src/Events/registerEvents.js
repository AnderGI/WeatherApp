import { renderGraph } from "../UI/renderGraph";
import { renderPage, renderWeatherInfo, setTempInC } from "../UI/renderPage";
let data;
export function registerEvents(JSONData) {
  data = JSONData;
  document.addEventListener("click", function (e) {
    const target = e.target;

    if (target.matches("article.weatherCard")) {
      targetWeatherCardsSelectedState(target);
    } else if (target.matches("button.tempBtn")) {
      toogleSelectedClassAtTempButtons(target);
    }
  });
}

function targetWeatherCardsSelectedState(element) {
  const previouslySelectedCard = [...element.parentElement.children]
    .find((el) => el.classList.contains("selected"))
    .classList.remove("selected");
  element.classList.add("selected");
  renderWeatherInfo(data);
  //renderGraph(JSONData)
}

function toogleSelectedClassAtTempButtons(target) {
  if (!target.classList.contains("selected")) {
    [...target.parentElement.children]
      .find((el) => el.classList.contains("selected"))
      .classList.remove("selected");
    target.classList.add("selected");
    setTempInC(target.classList.contains("celsius")); //true then in C else in F
    renderPage(data);
  }
}
