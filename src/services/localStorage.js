const FRIDGE = "fridge";

export const getIngredientsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(FRIDGE));

export const saveIngredientInLocalStorage = (ingredient) => {
  let existingFridge = getIngredientsFromLocalStorage() || [];
  const newFridge = [...existingFridge, ingredient];
  try {
    localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

export const removeIngredientFromLocalStorage = (id) => {
  let existingFridge = getIngredientsFromLocalStorage();
  const newFridge = existingFridge.filter((ingredient) => ingredient.id !== id);
  try {
    localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};
