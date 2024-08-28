import recipesReducer from "./recipes/recipes";
import ingredientsReducer from "./ingredients/ingredients";
import fridgeReducer from "./fridge/fridge";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    fridge: fridgeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
