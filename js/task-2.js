// Ingredients array
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

// Получение ссылки на уже существующий в HTML ul
const ingredientsList = document.getElementById("ingredients");
// Проверка в консоли, что доступ получен
console.log(ingredientsList);

// Создание одного массива с созданными лишками для списка
const ingredientsItems = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  return item;
});

// Добавление лишек в узел ul
ingredientsList.append(...ingredientsItems);
