import {
  getInitialRecipesFromApi,
  getRecipesWithParamFromApi,
} from "services/foodApi";

//initial state
const initialState = {
  recipes: [],
  loadingRecipes: [],
  isLoading: false,
};

//ACTION TYPES
const GET_RECIPES_STARTED = `GET_RECIPES_STARTED`;
const GET_RECIPES_SUCCESS = `GET_RECIPES_SUCCESS`;
const GET_RECIPES_FAIL = `GET_RECIPES_FAIL`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_STARTED:
      return { ...state, isLoading: true };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload?.length
          ? [...action.payload]
          : [...state.recipes],
        isLoading: false,
      };
    case GET_RECIPES_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

//ACTION CREATORS
const getRecipesStarted = () => ({ type: GET_RECIPES_STARTED });
const getRecipesSuccess = (result) => ({
  type: GET_RECIPES_SUCCESS,
  payload: result,
});
const getRecipesFail = (error) => ({ type: GET_RECIPES_FAIL, error });

// THUNKS
export const getInitialRecipesAsync = () => async (dispatch, getState) => {
  const { isLoading } = getState().recipes;

  if (isLoading) {
    return;
  }

  dispatch(getRecipesStarted());
  try {
    const result = await getInitialRecipesFromApi();
    dispatch(getRecipesSuccess(result));
  } catch (err) {
    dispatch(getRecipesFail(err));
  }
};

// THUNKS
export const getRecipesWithParamAsync =
  (searchParam, postAction) => async (dispatch, getState) => {
    const { isLoading } = getState().recipes;

    if (isLoading) {
      return;
    }

    dispatch(getRecipesStarted());
    if (postAction) postAction();
    try {
      const result = await getRecipesWithParamFromApi(searchParam);
      dispatch(getRecipesSuccess(result));
    } catch (err) {
      dispatch(getRecipesFail(err));
    }
  };

//SELECTORS
export const getRecipes = (state) => state.recipes;

export default reducer;
