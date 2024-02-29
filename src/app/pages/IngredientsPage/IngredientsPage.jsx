import IngredientsList from "app/IngredientsList/IngredientsList";
import Spinner from "components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { getAllIngredients } from "store/ingredients/ingredients";
import initialIngredients from "app/IngredientsList/initialIngredients";

const IngredientsPage = () => {
  const ingredientsSearch = useSelector(getAllIngredients);
  const ingredients = ingredientsSearch.ingredients.length
    ? ingredientsSearch.ingredients
    : initialIngredients;
  const { isLoading } = ingredientsSearch;

  return (
    <>
      Ingredients
      {isLoading && <Spinner />}
      <IngredientsList ingredients={ingredients} />
    </>
  );
};

export default IngredientsPage;
