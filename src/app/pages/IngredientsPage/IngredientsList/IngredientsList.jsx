import Flex from "components/Flex/Flex";
import Ingredient from "./Ingredient/Ingredient";

const IngredientsList = ({ ingredients }) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {ingredients.map((ingredient) => {
        return <Ingredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </Flex>
  );
};

export default IngredientsList;
