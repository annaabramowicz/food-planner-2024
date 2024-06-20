import Flex from "components/Flex/Flex";
import FridgeIngredient from "./FridgeIngredient/FridgeIngredient";

type IngredientsProps = {
  ingredients: {
    ingredients: { id: number; name: string; image: string }[];
  };
  isLoading?: boolean;
};

const FridgeIngredientsList = ({ ingredients }: IngredientsProps) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {ingredients.ingredients.map((ingredient) => {
        return <FridgeIngredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </Flex>
  );
};

export default FridgeIngredientsList;
