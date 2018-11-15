var reviewsForm = document.querySelector(".reviews-form");
var popupFailure = document.querySelector(".popup--failure");
var popupSuccess = document.querySelector(".popup--success");
var overlay = document.querySelector(".popup-overlay");
var firstName = reviewsForm.querySelector("[name=username]");
var secondName = reviewsForm.querySelector("[name=usersurname]");
var phone = reviewsForm.querySelector("[name=userphone]");
var email = reviewsForm.querySelector("[name=useremail]");
var reviewsformBTN = reviewsForm.querySelector(".reviews-form__button");
var closeFailure = popupFailure.querySelector(".popup__btn-ok");
var closeSuccess = popupSuccess.querySelector(".popup__btn-close");

reviewsformBTN.addEventListener("click", function (event) {
  event.preventDefault();
  if (!firstName.value || !secondName.value || !phone.value || !email.value) {
    overlay.classList.add("popup--show");
    popupFailure.classList.add("popup--show");
    closeFailure.focus();
  } else {
    overlay.classList.add("popup--show");
    popupSuccess.classList.add("popup--show");
    closeSuccess.focus();
  }
});

closeFailure.addEventListener("click", function (event) {
  event.preventDefault();
  popupFailure.classList.remove("popup--show");
  overlay.classList.remove("popup--show");
});

closeSuccess.addEventListener("click", function (event) {
  event.preventDefault();
  popupSuccess.classList.remove("popup--show");
  overlay.classList.remove("popup--show");
});

overlay.addEventListener("click", function (event) {
  event.preventDefault();
  popupFailure.classList.remove("popup--show");
  popupSuccess.classList.remove("popup--show");
  overlay.classList.remove("popup--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popupFailure.classList.contains("popup--show") && overlay.classList.contains("popup--show")) {
      popupFailure.classList.remove("popup--show");
      overlay.classList.remove("popup--show");
    }
    if (popupSuccess.classList.contains("popup--show") && overlay.classList.contains("popup--show")) {
      popupSuccess.classList.remove("popup--show");
      overlay.classList.remove("popup--show");
    }
  }
});
