const filter = document.querySelector(".filter");
const mainFilterWrap = document.querySelector(".main__filter-wrap");
const mainFilterInner = document.querySelector(".main__filter-inner");
const filterToogle = document.querySelector(".filter__toogle");
const filterButtonsLetter = document.querySelectorAll(".filter__button-letter");
const filterCountries = document.querySelectorAll(".filter__countries");

// Открытие и закрытие фильтра

if (filter && filterToogle) {
  filterToogle.addEventListener("click", function () {
    filter.classList.toggle("filter--open");
    mainFilterWrap.classList.add("main__filter-wrap--open");
    mainFilterInner.classList.add("main__filter-inner--open");
  });
}

// Удаляет класс nojs

if (filter && mainFilterWrap && mainFilterInner) {
  filter.classList.remove("filter--nojs");
  mainFilterWrap.classList.remove("main__filter-wrap--nojs");
  mainFilterInner.classList.remove("main__filter-inner--nojs");
}

// Функция удаления текущих классов

if (filterButtonsLetter) {
  function clearCurrentCountries() {
    for (let i = 0; i < filterButtonsLetter.length; i += 1) {
      filterButtonsLetter[i].classList.remove('filter__button-letter--current');
      filterCountries[i].classList.remove('filter__countries--current');
    };
  };

  // Добавляет текущие классы

  for (let i = 0; i < filterButtonsLetter.length; i += 1) {
    filterButtonsLetter[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      clearCurrentCountries();

      filterButtonsLetter[i].classList.add('filter__button-letter--current');
      filterCountries[i].classList.add('filter__countries--current');
    });
  };
};
