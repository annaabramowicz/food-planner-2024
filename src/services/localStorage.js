const FRIDGE = "fridge";

export const getIngredientsFromLocalStorage = () => {
  try {
    const value = JSON.parse(localStorage.getItem(FRIDGE));
    return value || []
  } catch (e) {
    console.error(`${e.name}: ,${e.message}`);
    return [];
  }
};

export const saveIngredientInLocalStorage = (ingredient) => {
  let existingFridge = getIngredientsFromLocalStorage();
  const newFridge = [...existingFridge, ingredient];
  try {
    localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
  } catch (e) {
    console.error(`${e.name}: ,${e.message}`);
  }
};

export const removeIngredientFromLocalStorage = (id) => {
  let existingFridge = getIngredientsFromLocalStorage();
  const newFridge = existingFridge.filter((ingredient) => ingredient.id !== id);
  try {
    localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
  } catch (e) {
    console.error(`${e.name}: ,${e.message}`);
  }
};
