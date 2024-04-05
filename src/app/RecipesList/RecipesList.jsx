import Flex from "components/Flex/Flex";
import Recipe from "./Recipe/Recipe";

const RecipesList = ({rederedRecipes}) => {
  
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {rederedRecipes?.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </Flex>
  );
};

export default RecipesList;
