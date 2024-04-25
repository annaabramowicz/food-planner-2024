import IngredientsList from "./IngredientsList/IngredientsList";
import Spinner from "components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { getIngredients } from "store/ingredients/ingredients";
import store from "store/store";

const IngredientsPage = () => {
  const ingredients = store.getState().ingredients;
  const { isLoading } = ingredients;

  return (
    <>
      <IngredientsList ingredients={ingredients.ingredients} />
      {isLoading && <Spinner />}
    </>
  );
};

export default IngredientsPage;
