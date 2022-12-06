
export function slideCarrousel(btn) {
  //alterIndex  of slides--> Depends on next or prev btn
  const alterIndex = btn.classList.contains("next") ? 1 : -1;
  //get the current active slide which we'll alter
  const activeSlide = document.querySelector(".activeSlide");
  //get the array of every item by using the ... operator
  const slideArray = [...document.querySelectorAll(".item")];
  //create an index taking into account the active slide and the alterIndex
  let index = slideArray.indexOf(activeSlide) + alterIndex;

  /**
   * Evaluate the last and first slide position
   * to return to the first(if last && forward) or
   * last (if first && backwards)
   */
  if (index >= slideArray.length) index = 0;
  if (index < 0) index = slideArray.length - 1;

  //add active class to new slide and remove from previous
  slideArray[index].classList.add("activeSlide");
  activeSlide.classList.remove("activeSlide");
}

export function btnListCarrousel(btn) {
  //alter the same way the index in the button nodeList
  const alterIndex = btn.classList.contains("next") ? 1 : -1;
  //get tha button which has the active class
  const activeBtn = document.querySelector(".activeBtn");
  //get the array of all the btn
  const btnArray = [...document.querySelectorAll(".roundBtn")];
  //get the index takin into account the index of the
  //active btn an the alter index
  let index = btnArray.indexOf(activeBtn) + alterIndex;
  if (index >= btnArray.length) index = 0;
  if (index < 0) index = btnArray.length - 1;

  btnArray[index].classList.add("activeBtn");
  activeBtn.classList.remove("activeBtn");
}

