/* typescript version */

"use strict";

/* to resolve the "cannot redeclare block-scoped variable" ts error
use export { }; or an IIFE */

const wrapper = (() => {
  // button elements
  const buttonCancel: Element | null = document.querySelector("#button-cancel");
  const buttonAccept: Element | null = document.querySelector("#button-accept");

  const isDisabled: string = "true";

  // Cancel btn function
  const toggleComeBackPopupView = () => {
    const popupComeBack: Element | null =
      document.querySelector("#popup-come-back");
    if (buttonAccept !== null && popupComeBack !== null) {
      buttonAccept.classList.add("not-allowed");
      buttonAccept.setAttribute("disabled", isDisabled);

      popupComeBack.classList.remove("offScreenComeBackSoonPopup");
      popupComeBack.classList.add("onScreenComeBackSoonPopup");

      setTimeout(function () {
        popupComeBack.classList.remove("onScreenComeBackSoonPopup");
        popupComeBack.classList.add("offScreenComeBackSoonPopup");

        buttonAccept.removeAttribute("disabled");
        buttonAccept.classList.remove("not-allowed");
      }, 8000);
    }
  };

  // Accept btn function
  const toggleThankYouPopupView = () => {
    const popupThankYou: Element | null =
      document.querySelector("#popup-thank-you");
    if (buttonCancel !== null && popupThankYou !== null) {
      buttonCancel.classList.add("not-allowed");
      buttonCancel.setAttribute("disabled", isDisabled);
      popupThankYou.classList.remove("offScreenThankYouPopup");
      popupThankYou.classList.add("onScreenThankYouPopup");

      setTimeout(function () {
        popupThankYou.classList.remove("onScreenThankYouPopup");
        popupThankYou.classList.add("offScreenThankYouPopup");
        buttonCancel.removeAttribute("disabled");
        buttonCancel.classList.remove("not-allowed");
      }, 8000);
    }
  };

  // touch enabled

  if (buttonAccept !== null) {
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
  }

  if (buttonCancel !== null) {
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
  }
})();
