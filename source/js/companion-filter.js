const buttonsFilterContent = document.querySelectorAll(".companion-filter__legend-button");
const filterContents = document.querySelectorAll(".companion-filter__content");

if (buttonsFilterContent && filterContents) {
  // Удаляет класс nojs

  for (let i = 0; i < buttonsFilterContent.length; i += 1) {
    buttonsFilterContent[i].classList.remove("companion-filter__legend-button--nojs");
    filterContents[i].classList.remove("companion-filter__content--nojs");
  }

  // Открывает и закрывает фильтр

  for (let i = 0; i < buttonsFilterContent.length; i += 1) {
    buttonsFilterContent[i].addEventListener('click', function() {

      buttonsFilterContent[i].classList.toggle('companion-filter__legend-button--open');
      filterContents[i].classList.toggle('companion-filter__content--open');
    });
  }
}
