if (document.querySelector('.card__likes')) {
  const likesButtons = document.querySelectorAll('.card__likes-button');
  const likesNumbers = document.querySelectorAll('.card__likes-number');
  const likesTexts = document.querySelectorAll('.card__likes .visually-hidden');

  for (let i = 0; i < likesButtons.length; i += 1) {
    likesButtons[i].addEventListener('click', function() {
      if (likesButtons[i].classList.contains('card__likes-button--active')) {
        likesButtons[i].classList.remove('card__likes-button--active');
        likesButtons[i].classList.add('card__likes-button--inactive');
        likesTexts[i].textContent = 'Поставить лайк';
        likesNumbers[i].textContent--;

      } else {
        likesButtons[i].classList.remove('card__likes-button--inactive');
        likesButtons[i].classList.add('card__likes-button--active');
        likesTexts[i].textContent = 'Снять лайк';
        likesNumbers[i].textContent++;
      }
    })
  }
}
