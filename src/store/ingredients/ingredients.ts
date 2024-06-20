import { getIngredientsWithParamFromApi } from "services/foodApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialIngredients from "./initialIngredients";
import { Ingredient } from "lib/types";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

type InitialState = {
  ingredients: Ingredient[];
  isLoading: boolean;
  error?: null | string;
};

const initialState: InitialState = {
  ingredients: initialIngredients,
  isLoading: false,
  error: null,
};

export const getIngredientsWithParamAsync = createAsyncThunk(
  "getIngredientsWithParam",
  async (searchParam: string, thunkAPI) => {
    try {
      const result = await getIngredientsWithParamFromApi(searchParam);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

const slice = createSlice({
  name: "ingredients",
  initialState: initialState,
  reducers: {},
  // selectors: {
  //   ingredientsData: (state) => state.ingredients,
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsWithParamAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredientsWithParamAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ingredients = payload;
      })
      .addCase(getIngredientsWithParamAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export const useIngredientsData = () =>
  useSelector((state: RootState) => state.ingredients);
//  export const { ingredientsData } = slice.selectors;

export default slice.reducer;
