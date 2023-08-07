export function registerEvents() {
  document.addEventListener("click", function (e) {
    const target = e.target;

    if (target.matches("article.weatherCard")) {
      targetWeatherCardsSelectedState(target);
    }
  });
}

function targetWeatherCardsSelectedState(element) {
  const previouslySelectedCard = [...element.parentElement.children]
    .find((el) => el.classList.contains("selected"))
    .classList.remove("selected");
  element.classList.add("selected");
}
