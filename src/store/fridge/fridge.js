import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getIngredientsFromLocalStorage,
  saveIngredientInLocalStorage,
  removeIngredientFromLocalStorage,
} from "services/localStorage";

//initial state
const initialState = { ingredients: getIngredientsFromLocalStorage()};

export const saveIngredientToFridgeAsync = createAsyncThunk(
  "saveIngredientToFridge",
  (ingredient, thunkAPI) => {
    saveIngredientInLocalStorage(ingredient);
    thunkAPI.dispatch(saveIngredientToFridge(ingredient));
  }
);

export const removeIngredientFromFridgeAsync = createAsyncThunk(
  "removeIngredientFromFridge",
  (id, thunkAPI) => {
    removeIngredientFromLocalStorage(id);
    thunkAPI.dispatch(removeIngredientFromFridge(id));
  }
);

const slice = createSlice({
  name: "fridge",
  initialState: initialState,
  reducers: {
    saveIngredientToFridge: (state, { payload }) => {
      state.ingredients.push(payload);
    },
    removeIngredientFromFridge: (state, { payload }) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== payload
      );
    },
  },
});

export const { saveIngredientToFridge, removeIngredientFromFridge } =
  slice.actions;

export default slice.reducer;
