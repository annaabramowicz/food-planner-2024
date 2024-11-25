import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Ingredient } from "lib/types";
import { useSelector } from "react-redux";
import {
  getIngredientsFromLocalStorage,
  saveIngredientInLocalStorage,
  removeIngredientFromLocalStorage,
} from "services/localStorage";
import { RootState } from "store/store";

type ThunkAPIConfig = {
  state: RootState;
  rejectValue: string;
};

type InitialState = {
  ingredients: Ingredient[];
};

const initialState: InitialState = {
  ingredients: [],
};

export const saveInitialIngredientsToFridgeThunk = createAsyncThunk<
  void,
  void,
  ThunkAPIConfig
>("saveInitialIngredientsToFridge", (_, thunkAPI) => {
  const ingredients = getIngredientsFromLocalStorage();
  thunkAPI.dispatch(saveInitialIngredientsToFridge(ingredients));
});

export const saveIngredientToFridgeThunk = createAsyncThunk<
  void,
  Ingredient,
  ThunkAPIConfig
>("saveIngredientToFridge", (ingredient: Ingredient, thunkAPI) => {
  saveIngredientInLocalStorage(ingredient);
  thunkAPI.dispatch(saveIngredientToFridge(ingredient));
});

export const removeIngredientFromFridgeThunk = createAsyncThunk<
  void,
  number,
  ThunkAPIConfig
>("removeIngredientFromFridge", (id: number, thunkAPI) => {
  removeIngredientFromLocalStorage(id);
  thunkAPI.dispatch(removeIngredientFromFridge(id));
});

const slice = createSlice({
  name: "fridge",
  initialState: initialState,
  selectors: {
    fridgeData: (state) => state,
  },
  reducers: {
    saveIngredientToFridge: (state, { payload }) => {
      state.ingredients.push(payload);
    },
    saveInitialIngredientsToFridge: (state, { payload }) => {
      state.ingredients = [...state.ingredients, ...payload];
    },
    removeIngredientFromFridge: (state, { payload }) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== payload
      );
    },
  },
});

export const useFridgeData = () => useSelector(slice.selectors.fridgeData);

export const {
  saveIngredientToFridge,
  saveInitialIngredientsToFridge,
  removeIngredientFromFridge,
} = slice.actions;

export default slice.reducer;
