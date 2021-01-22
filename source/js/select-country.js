const buttonSelectRoute = document.querySelector(".route__button--unselected");
const itemSelectRoute = document.querySelector(".route__item--unselected");
const buttonsSelectCountry = document.querySelectorAll(".select-country__button");
const countriesList = document.querySelectorAll(".select-country__countries");

if (buttonSelectRoute && itemSelectRoute) {
    buttonSelectRoute.addEventListener("click", function () {
    itemSelectRoute.classList.toggle("route__item--open");
  });
}

if (buttonsSelectCountry) {
  function clearCurrentCountries() {
    for (let i = 0; i < buttonsSelectCountry.length; i += 1) {
      buttonsSelectCountry[i].classList.remove('select-country__button--current');
      countriesList[i].classList.remove('select-country__countries--current');
    };
  };

  for (let i = 0; i < buttonsSelectCountry.length; i += 1) {
    buttonsSelectCountry[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      clearCurrentCountries();

      buttonsSelectCountry[i].classList.add('select-country__button--current');
      countriesList[i].classList.add('select-country__countries--current');
    });
  };
};
