import IngredientsList from "./IngredientsList/IngredientsList";
import { useIngredientsData } from "store/ingredients/ingredients";

const IngredientsPage = () => {
  const ingredients = useIngredientsData();

  return (
    <>
      <IngredientsList ingredients={ingredients} />
    </>
  );
};

export default IngredientsPage;
