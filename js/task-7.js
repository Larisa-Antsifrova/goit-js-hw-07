// Напиши скрипт, который реагирует на изменение значения
// input#font-size - control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// Получение доступа к контролу и к тексту
const fsControlRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

// Функция для обновления размера шрифта. Размер шрифта меняется процетно.
function updateFontSize() {
  textRef.style.fontSize = `${fsControlRef.value * 2}%`;
}

// Добавление слушателя события
fsControlRef.addEventListener("input", updateFontSize);
