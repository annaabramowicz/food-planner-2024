import Flex from "components/Flex/Flex";
import Ingredient from "./Ingredient/Ingredient";
import { IngredientsProps } from "lib/types";

const IngredientsList = ({ ingredients }: IngredientsProps) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {ingredients.map((ingredient) => {
        console.log(ingredient)
        return <Ingredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </Flex>
  );
};

export default IngredientsList;
