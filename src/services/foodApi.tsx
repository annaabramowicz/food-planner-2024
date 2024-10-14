import axios from "axios";

export const getInitialRecipesFromApi = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/recipes/complexSearch"
    );
    return data.results;
  } catch (error) {
    console.error("There was an error fetching the recipes!", error);
  }
};

export const getRecipesWithParamFromApi = async (searchParam: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/recipes/complexSearch`,
      { params: { query: searchParam } }
    );
    return data.results;
  } catch (error) {
    console.error("There was an error fetching the recipes!", error);
  }
};

export const getIngredientsWithParamFromApi = async (searchParam: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/food/ingredients/search`,
      { params: { query: searchParam } }
    );
    return data.results;
  } catch (error) {
    console.error("There was an error fetching the ingredients!", error);
  }
};
