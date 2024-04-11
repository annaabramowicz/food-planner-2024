import IngredientsList from "./IngredientsList/IngredientsList";
import Spinner from "components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { getIngredients } from "store/ingredients/ingredients";

const IngredientsPage = () => {
  const ingredients = useSelector(getIngredients);
  const { isLoading } = ingredients;

  return (
    <>
      <IngredientsList ingredients={ingredients.ingredients} />
      {isLoading && <Spinner />}
    </>
  );
};

export default IngredientsPage;
