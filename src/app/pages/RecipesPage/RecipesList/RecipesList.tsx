import Flex from "components/Flex/Flex";
import Recipe from "./Recipe/Recipe";
import { RecipesProps } from "lib/types";

const RecipesList = ({ renderedRecipes }: RecipesProps) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {renderedRecipes?.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </Flex>
  );
};

export default RecipesList;
