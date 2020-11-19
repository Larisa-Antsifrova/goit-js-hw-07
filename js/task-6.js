// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

//1. Сколько символов должно быть в инпуте,
//указывается в его атрибуте data-length.

//2. Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.

// Получение ссылок на инпут и значение атрибута "data-length" инпута
const inputRef = document.getElementById("validation-input");
const validLength = +inputRef.attributes["data-length"].value;

// Функция для сравнения значения "data-length" инпута и количества символов текущего значения инпута.
// Добавляет или убирает классы valid/invalid.
function validateInput() {
  const currentInputLength = inputRef.value.length;

  if (currentInputLength === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  } else if (currentInputLength === validLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

// Добавляет слушатель события на инпут
inputRef.addEventListener("blur", validateInput);
