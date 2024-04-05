import RecipesList from "app/RecipesList/RecipesList";
import Spinner from "components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { getRecipes } from "store/recipes/recipes";

const RecipesPage = () => {
  const recipesState = useSelector(getRecipes);
  const { initialRecipes, recipes, loadingRecipes, isLoading } = recipesState;

  const rederedRecipes = isLoading
    ? loadingRecipes
    : recipes.length
    ? recipes
    : initialRecipes;

  return (
    <>
      <RecipesList rederedRecipes={rederedRecipes} />
      {isLoading && <Spinner />}
    </>
  );
};

export default RecipesPage;
