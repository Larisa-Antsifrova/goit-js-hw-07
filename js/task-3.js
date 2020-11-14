// Массив объектов изображений
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Напиши скрипт для создания галлереи изображений по массиву данных.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// 1. Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// 2. Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

//Получение ссылки на уже существующий в HTML ul
const galleryList = document.getElementById("gallery");

// Функция для создания одного элемента галереи из объекта изображения
function createGalleryItem({ url, alt }) {
  return `<li class="gallery-item">
      <img src="${url}" alt="${alt}" width="400">
    </li>`;
}

// Создание всей разметки галереи
const galleryMarkup = images.reduce(
  (markup, item) => markup + createGalleryItem(item),
  ""
);

// Вставка всей разметки галереи в уже существующий узел ul
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

// Добавление минимальных стилей
galleryList.style.display = "flex";
galleryList.style.justifyContent = "space-around";

const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((el) => {
  el.style.border = "4px solid purple";
  el.style.borderRadius = "7px";
  el.style.width = "400px";
  el.style.height = "200px";
  el.style.overflow = "hidden";
});
