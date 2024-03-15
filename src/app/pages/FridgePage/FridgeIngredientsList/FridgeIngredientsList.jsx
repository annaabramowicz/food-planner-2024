import Flex from "components/Flex/Flex";
import FridgeIngredient from "./FridgeIngredient/FridgeIngredient";

const FridgeIngredientsList = ({ ingredients }) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {ingredients.map((ingredient) => {
        return <FridgeIngredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </Flex>
  );
};

export default FridgeIngredientsList;
