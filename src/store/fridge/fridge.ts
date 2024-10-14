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

const initialState = {
  ingredients: getIngredientsFromLocalStorage(),
};

export const saveIngredientToFridgeAsync = createAsyncThunk<
  void,
  Ingredient,
  ThunkAPIConfig
>("saveIngredientToFridge", (ingredient: Ingredient, thunkAPI) => {
  saveIngredientInLocalStorage(ingredient);
  thunkAPI.dispatch(saveIngredientToFridge(ingredient));
});

export const removeIngredientFromFridgeAsync = createAsyncThunk<
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
    removeIngredientFromFridge: (state, { payload }) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== payload
      );
    },
  },
});

export const useFridgeData = () => useSelector(slice.selectors.fridgeData);

export const { saveIngredientToFridge, removeIngredientFromFridge } =
  slice.actions;

export default slice.reducer;
