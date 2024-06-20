import IngredientsList from "./IngredientsList/IngredientsList";
import Spinner from "components/Spinner/Spinner";
import { useIngredientsData } from "store/ingredients/ingredients";

const IngredientsPage = () => {
  const ingredients = useIngredientsData();
  const { isLoading } = ingredients;

  return (
    <>
      <IngredientsList ingredients={ingredients} />
      {isLoading && <Spinner />}
    </>
  );
};

export default IngredientsPage;
  