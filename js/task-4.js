// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// 1. Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// 2. Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// 3. Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterRef = document.getElementById("value");
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

let counterValue = +counterRef.textContent;

function increment() {
  return (counterValue += 1);
}

function decrement() {
  return counterValue < 1 ? (counterValue = 0) : (counterValue -= 1);
}

incrementBtnRef.addEventListener("click", () => {
  increment();
  counterRef.textContent = counterValue;
});
decrementBtnRef.addEventListener("click", () => {
  decrement();
  counterRef.textContent = counterValue;
});
