  var searchButton = document.querySelector(".search-window__js-button");
  var openForm = document.querySelector(".search-form");

  searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  openForm.classList.toggle("search-form--show");})

// var open = document.querySelector(".search-window__js-button");
// var popup = document.querySelector(".search-form");
// var close = popup.querySelector(".search-window__js-button");
// var focus = popup.querySelector("[name=name]");

// open.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.classList.add("search-form--show");
//   focus.focus();
// });

// close.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.classList.remove("search-form--show");
// });

// window.addEventListener("keydown", function(event) {
//   if (event.keyCode === 27) {
//     if (popup.classList.contains("search-form--show")) {
//       popup.classList.remove("search-form--show");
//     }
//   }
// });