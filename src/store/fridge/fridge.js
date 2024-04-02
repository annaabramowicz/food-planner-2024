import {
  getIngredientsFromLocalStorage,
  saveIngredientInLocalStorage,
  removeIngredientFromLocalStorage,
} from "services/localStorage";

//initial state
const initialState = { ingredients: getIngredientsFromLocalStorage() || [] };

//ACTION TYPES
const SAVE_INGREDIENT_TO_FRIDGE = `SAVE_INGREDIENT_TO_FRIDGE`;
const REMOVE_INGREDIENT_FROM_FRIDGE = `REMOVE_INGREDIENT_FROM_FRIDGE`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INGREDIENT_TO_FRIDGE:
      return { ingredients: [...state.ingredients, action.payload] };
    case REMOVE_INGREDIENT_FROM_FRIDGE:
      return {
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

//ACTION CREATORS
const saveIngredientToFridge = (ingredient) => ({
  type: SAVE_INGREDIENT_TO_FRIDGE,
  payload: ingredient,
});
const removeIngredientFromFridge = (id) => ({
  type: REMOVE_INGREDIENT_FROM_FRIDGE,
  payload: id,
});

// THUNKS
export const saveIngredientToFridgeAsync = (ingredient) => (dispatch) => {
  saveIngredientInLocalStorage(ingredient);
  dispatch(saveIngredientToFridge(ingredient));
};
export const removeIngredientFromFridgeAsync = (id) => (dispatch) => {
  removeIngredientFromLocalStorage(id);
  dispatch(removeIngredientFromFridge(id));
};

//SELECTORS
export const getFridgeState = (state) => state.fridge;

export default reducer;
