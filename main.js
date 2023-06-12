// elements
const popupComeBack = document.querySelector("#popup-come-back");
const popupThankYou = document.querySelector("#popup-thank-you");

const buttonAccept = document.querySelector("#button-accept");
const buttonCancel = document.querySelector("#button-cancel");

// Cancel btn function
const toggleComeBackPopupView = () => {
  buttonAccept.classList.add("not-allowed");
  buttonAccept.setAttribute("disabled", true);

  popupComeBack.classList.remove("offScreenComeBackSoonPopup");
  popupComeBack.classList.add("onScreenComeBackSoonPopup");

  setTimeout(function () {
    popupComeBack.classList.remove("onScreenComeBackSoonPopup");
    popupComeBack.classList.add("offScreenComeBackSoonPopup");

    buttonAccept.removeAttribute("disabled");
    buttonAccept.classList.remove("not-allowed");
  }, 8000);
};

// Accept btn function
const toggleThankYouPopupView = () => {
  buttonCancel.classList.add("not-allowed");
  buttonCancel.setAttribute("disabled", true);
  popupThankYou.classList.remove("offScreenThankYouPopup");
  popupThankYou.classList.add("onScreenThankYouPopup");

  setTimeout(function () {
    popupThankYou.classList.remove("onScreenThankYouPopup");
    popupThankYou.classList.add("offScreenThankYouPopup");
    buttonCancel.removeAttribute("disabled");
    buttonCancel.classList.remove("not-allowed");
  }, 8000);
};

// BONUS solution attempt

buttonAccept.addEventListener("touchstart", function (event) {
  event.preventDefault();
  toggleThankYouPopupView();
});

buttonAccept.addEventListener("touchend", function (event) {
  buttonAccept.removeEventListener("click", toggleThankYouPopupView);
});

// Handle double tap event
buttonAccept.addEventListener("touchstart", function (event) {
  buttonAccept.removeEventListener("click", toggleThankYouPopupView);
});

buttonCancel.addEventListener("touchstart", function (event) {
  event.preventDefault();
  toggleComeBackPopupView();
});

buttonCancel.addEventListener("touchend", function (event) {
  buttonCancel.removeEventListener("click", toggleComeBackPopupView);
});

// Handle double tap event
buttonCancel.addEventListener("touchstart", function (event) {
  buttonCancel.removeEventListener("click", toggleComeBackPopupView);
});
