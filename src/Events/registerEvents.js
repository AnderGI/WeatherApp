import { renderWeatherInfo } from "../UI/renderPage";

export function registerEvents(JSONData) {
  document.addEventListener("click", function (e) {
    const target = e.target;

    if (target.matches("article.weatherCard")) {
      targetWeatherCardsSelectedState(target, JSONData);
    }
  });
}

function targetWeatherCardsSelectedState(element, JSONData) {
  const previouslySelectedCard = [...element.parentElement.children]
    .find((el) => el.classList.contains("selected"))
    .classList.remove("selected");
  element.classList.add("selected");
  renderWeatherInfo(JSONData);
}
