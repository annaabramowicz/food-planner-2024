import recipesReducer from "./recipes/recipes";
import ingredientsReducer from "./ingredients/ingredients";
import fridgeReducer from "./fridge/fridge";
import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const reducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  fridge: fridgeReducer,
});

const store = configureStore({ reducer, composedEnhancer });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
export default store;
