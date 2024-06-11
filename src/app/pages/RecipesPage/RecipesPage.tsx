import RecipesList from "./RecipesList/RecipesList";
import Spinner from "components/Spinner/Spinner";
import { useSelector } from "react-redux";

const RecipesPage = () => {
  const recipesState = useSelector((state) => state.recipes);
  const { recipes, loadingRecipes, isLoading } = recipesState;
  const renderedRecipes = isLoading ? loadingRecipes: recipes;    

  return (
    <>
      <RecipesList renderedRecipes={renderedRecipes} />
      {isLoading && <Spinner />}
    </>
  );
};

export default RecipesPage;
