import RecipesList from "./RecipesList/RecipesList";
import Spinner from "components/Spinner/Spinner";
import { useRecipesData } from "store/recipes/recipes";

const RecipesPage = () => {
  const recipesState = useRecipesData();
  const { recipes, isLoading } = recipesState;

  return (
    <>
      <RecipesList renderedRecipes={recipes} />
      {isLoading && <Spinner />}
    </>
  );
};

export default RecipesPage;
