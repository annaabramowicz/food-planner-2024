import { createStore, applyMiddleware } from "redux";
import recipesReducer from "./recipes/recipes";
import ingredientsReducer from "./ingredients/ingredients";
import fridgeReducer from "./fridge/fridge";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const reducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  fridge: fridgeReducer,
});

const store = createStore(reducer, composedEnhancer);

export default store;
