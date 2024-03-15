const FRIDGE = "fridge";

export const saveIngredientInFridge = (ingredient) => {
  let existingFridge = JSON.parse(localStorage.getItem(FRIDGE));

  if (!existingFridge) {
    existingFridge = [];
  }
  
  const newFridge = [...existingFridge, ingredient];
  localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
};

export const getFridge = () => JSON.parse(localStorage.getItem(FRIDGE));
