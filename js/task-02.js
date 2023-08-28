const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 console.log(ingredients);

const ingredientsList = document.getElementById('ingredients');

console.log(ingredientsList);

const listItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});
console.log(listItems);

ingredientsList.append(...listItems);
console.log(ingredientsList.innerHTML);