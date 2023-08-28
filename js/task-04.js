let counterValue = 0;
const valueSpan = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const updateCounter = () => {
  valueSpan.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  updateCounter();
};

const increment = () => {
  counterValue += 1;
  updateCounter();
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

updateCounter();