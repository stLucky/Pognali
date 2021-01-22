const placementButton = document.querySelector(".placement__link");
const pageBlackout = document.querySelector(".page__blackout");
const modalTariffs = document.querySelector(".tariffs");
const modalTariffsClose = document.querySelector(".tariffs__button");

if (placementButton) {placementButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalTariffs.classList.add("tariffs--show");
    pageBlackout.classList.add("page__blackout--show");
  });
}

if (modalTariffsClose) {modalTariffsClose.addEventListener("click", function (evt) {
    modalTariffs.classList.remove("tariffs--show");
    pageBlackout.classList.remove("page__blackout--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && modalTariffs.classList.contains("tariffs--show")) {
    evt.preventDefault();

    modalTariffs.classList.remove("tariffs--show");
    pageBlackout.classList.remove("page__blackout--show");
  }
});
