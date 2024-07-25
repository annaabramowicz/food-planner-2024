import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getInitialRecipesFromApi,
  getRecipesWithParamFromApi,
} from "services/foodApi";
import { Recipe } from "lib/types";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

type InitialState = {
  recipes: Recipe[];
  isLoading: boolean;
  error?: string | null;
};

type ThunkAPIConfig = {
  state: RootState;
  rejectValue: string;
};

const initialState: InitialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

export const getInitialRecipesAsync = createAsyncThunk<
  Recipe[],
  void,
  ThunkAPIConfig
>("getInitialRecipes", async (_, thunkAPI) => {
  try {
    const result = await getInitialRecipesFromApi();
    return result;
  } catch (err) {
    if (err instanceof Error) {
      return thunkAPI.rejectWithValue(err.message);
    } else {
      return thunkAPI.rejectWithValue("Unexpected error");
    }
  }
});

export const getRecipesWithParamAsync = createAsyncThunk<
  Recipe[],
  string,
  ThunkAPIConfig
>("getRecipesWithParam", async (searchParam: string, thunkAPI) => {
  thunkAPI.dispatch(clearRecipesBeforeApiResponse());
  try {
    const result = await getRecipesWithParamFromApi(searchParam);
    return result;
  } catch (err) {
    if (err instanceof Error) {
      return thunkAPI.rejectWithValue(err.message);
    } else {
      return thunkAPI.rejectWithValue("Unexpected error");
    }
  }
});

const slice = createSlice({
  name: "recipes",
  initialState,
  selectors: {
    recipesData: (state) => state,
  },
  reducers: {
    clearRecipesBeforeApiResponse: (state) => {
      state.recipes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialRecipesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInitialRecipesAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.recipes = payload;
      })
      .addCase(getInitialRecipesAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(getRecipesWithParamAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipesWithParamAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.recipes = payload?.length ? [...payload] : [...state.recipes];
      })
      .addCase(getRecipesWithParamAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message || "Something went wrong";
      });
  },
});

export const useRecipesData = () => useSelector(slice.selectors.recipesData);

export const { clearRecipesBeforeApiResponse } = slice.actions;

export default slice.reducer;
