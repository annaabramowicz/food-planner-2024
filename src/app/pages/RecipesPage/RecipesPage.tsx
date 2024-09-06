import RecipesList from "./RecipesList/RecipesList";
import { useRecipesData } from "store/recipes/recipes";

const RecipesPage = () => {
  const { recipes } = useRecipesData();

  return <RecipesList renderedRecipes={recipes} />;
};

export default RecipesPage;
