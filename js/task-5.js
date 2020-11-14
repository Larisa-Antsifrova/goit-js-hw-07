// Напиши скрипт который, при наборе текста
// в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// Получение ссылок на инпут и спан для вывода
const inputNameRef = document.getElementById("name-input");
const outputNameRef = document.getElementById("name-output");

// Функция для обновления спана
function updateGreeting() {
  return inputNameRef.value
    ? (outputNameRef.textContent = inputNameRef.value)
    : (outputNameRef.textContent = "незнакомец");
}

// Добавление слушателя события, чтобы спан обновлялся во время ввода значения в инпут
inputNameRef.addEventListener("input", updateGreeting);
