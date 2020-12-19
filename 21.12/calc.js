const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.calculator__screen');
const subScreen = document.querySelector('.calculator__subscreen');

const MAX_SCREEN_LENGTH = 16;

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (screen.textContent.length <= MAX_SCREEN_LENGTH && button.getAttribute('type') === 'num-btn') {
      screen.textContent += button.getAttribute('value');
      subScreen.textContent += button.getAttribute('value');
    }
    if (button.getAttribute('type') === '.' && !screen.textContent.includes('.')) {
      screen.textContent += button.getAttribute('type');
      subScreen.textContent += button.getAttribute('type');
    }
    if (button.getAttribute('type') === 'c') {
      screen.textContent = '';
      subScreen.textContent = '';
  });
});