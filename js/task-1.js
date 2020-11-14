// Напиши скрипт, который выполнит следующие операции:

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// Получится 'В списке 3 категории.'

const allItems = document.querySelectorAll(".item");
console.log(`В списке ${allItems.length} категории.`);

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например, для первой категории получится:
// Категория: Животные
// Количество элементов: 4

allItems.forEach((el) => {
  const titleText = el.querySelector("h2").textContent;
  const listItemsQuantity = el.querySelectorAll("li");

  console.log(`Категория: ${titleText}`);
  console.log(`Количество элементов: ${listItemsQuantity.length}`);
});
