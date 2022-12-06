export function disableSearchSlide(){
    const searchSlide = document.querySelector(".itemSearch");
    const itemList = document.querySelector(".itemList");
    searchSlide.classList.add("disabled")
    itemList.classList.remove("notVisible")
  }