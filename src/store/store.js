import { createStore, applyMiddleware } from "redux";
import recipesReducer from "./recipes/recipes";
import { thunk } from 'redux-thunk'
import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const reducer = combineReducers({
  recipes: recipesReducer,
});

const store = createStore(reducer, composedEnhancer);

export default store;
