// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// 1. Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// 2. Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// 3. Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

//Получение ссылок на span counter-а и на кнопки
const counterRef = document.getElementById("value");
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

// Создание переменной для хранения текущего значения каунтера
let counterValue = +counterRef.textContent;

// Функция, увеличивающаязначение каунтера
function increment() {
  counterValue += 1;
}
// Функция, уменьшающая значение каунтера.
// Если значение каунтера опускается до 0,
// то значение остаётся 0 и не уходит в минус.
function decrement() {
  if (counterValue < 1) {
    counterValue = 0;
  } else {
    counterValue -= 1;
  }
}

//Добавление слушателей события на кнопки
incrementBtnRef.addEventListener("click", () => {
  increment();
  counterRef.textContent = counterValue;
});
decrementBtnRef.addEventListener("click", () => {
  decrement();
  counterRef.textContent = counterValue;
});
