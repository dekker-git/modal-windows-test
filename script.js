"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

////
// a function created to close the modals, reduce redudancy
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//////
//a function created to open the modals, reduce redundancy
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
///////

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//// we pass the argument 'e' which represents the keypress..
// when we console.log(e.key) it tells us which key was pressed,
// so we can check for if e.key = escape... and if the modal is actually popped up
//so we check for e.key===escape && !modal.classList.contains('hidden')
// using !modal.classList.... is using the negation, to say 'it does NOT contain'
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
