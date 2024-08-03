const shoppingListItems = ["Milk", "Bread", "Eggs", "Apple", "Banana"];

const shoppingListElement = document.getElementById("shoppingList");

for (let i = 0; i < shoppingListItems.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = shoppingListItems[i];
  shoppingListElement.appendChild(listItem);
}
