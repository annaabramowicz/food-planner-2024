const FRIDGE = "fridge";

export const getIngredientsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(FRIDGE));

export const saveIngredientInLocalStorage = (ingredient) => {
  let existingFridge = getIngredientsFromLocalStorage() || [];
  const newFridge = [...existingFridge, ingredient];
  localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
};

export const removeIngredientFromLocalStorage = (id) => {
  let existingFridge = getIngredientsFromLocalStorage();
  const newFridge = existingFridge.filter((ingredient) => ingredient.id !== id);
  localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
};
