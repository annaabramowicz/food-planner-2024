import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "react-use";
import { getIngredientsWithParamThunk } from "store/ingredients/ingredients";
import { getRecipesWithParamThunk } from "store/recipes/recipes";
import { useAppDispatch } from "store/useAppDispatch";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedByEnter, setSubmittedByEnter] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isCurrentRouteIngredients = pathname === "/ingredients";
  const isCurrentRouteRecipes = pathname === "/recipes";

  const navigateToRecipes =
    !isCurrentRouteIngredients && !isCurrentRouteRecipes
      ? () => navigate("/recipes")
      : () => {};

  const searchBarAction = (value: string) =>
    isCurrentRouteIngredients
      ? dispatch(getIngredientsWithParamThunk(value))
      : dispatch(getRecipesWithParamThunk(value));

  const executeSearch = (searchTerm: string) => {
    if (navigateToRecipes && searchTerm) navigateToRecipes();
    if (searchTerm !== "") {
      searchBarAction(searchTerm);
    }
  };

  useDebounce(
    () => {
      if (searchTerm && !submittedByEnter) {
        executeSearch(searchTerm);
      }
      setSubmittedByEnter(false);
    },
    1000,
    [searchTerm]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSubmittedByEnter(true);
      executeSearch(searchTerm);
    }
  };

  return { handleChange, handleKeyDown };
};

export default useSearch;
