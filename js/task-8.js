// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого,
// должен быть шире и выше предыдущего на 10px

//Создай функцию destroyBoxes(), которая очищает div#boxes.

// Получение доступа к инпуту и кнопкам
const inputNumberRef = document.querySelector("[type='number']");
const createBtnRef = document.querySelector("[data-action='render']");
const cleanBtnRef = document.querySelector("[data-action='destroy']");

// Получение доступа к узлу, в который будут помещаться созданные элементы.
const boxesHolder = document.getElementById("boxes");
// Добавление базовых стилей для коллекции.
boxesHolder.style.display = "flex";
boxesHolder.style.flexWrap = "wrap";
boxesHolder.style.alignItems = "center";

// Объявление переменной для сохранения значения инпута (количества боксов)
let amount = 0;

// Функция для создания коллекции боксов
function createBoxes(amount) {
  const boxesCollection = [];

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
    box.style.margin = "10px";
    width += 10;
    height += 10;
    boxesCollection.push(box);
  }

  boxesHolder.append(...boxesCollection);
}

// Функция для очистки коллекции
function destroyBoxes() {
  boxesHolder.innerHTML = "";
}

// Добавление слушателей событий на кнопки
// Записывает значение инпута в переменную amount
createBtnRef.addEventListener("click", () => (amount = +inputNumberRef.value));
// Создает нужное количество боксов
createBtnRef.addEventListener("click", () => {
  createBoxes(amount);
});
//Очищает коллекцию и обнуляет значение инпута
cleanBtnRef.addEventListener("click", () => {
  destroyBoxes();
  inputNumberRef.value = 0;
});
