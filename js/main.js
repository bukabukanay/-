const cards = document.querySelectorAll('.card');
const btnLeft = document.querySelector('.btn-cat');
const btnRight = document.querySelector('.btn-cat');

let currentIndex = 0;

btnRight.addEventListener('click', () => {
  if (currentIndex < cards.length - 3) {
    currentIndex++;
    cards[currentIndex].classList.add('card-hidden');
    cards[currentIndex + 3].classList.remove('card-hidden');
  }
});

btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    cards[currentIndex + 3].classList.add('card-hidden');
    currentIndex--;
    cards[currentIndex].classList.remove('card-hidden');
  }
});