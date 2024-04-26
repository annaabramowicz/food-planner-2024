import { useBreakpointValue } from "@chakra-ui/media-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getIngredientsWithParamAsync } from "store/ingredients/ingredients";
import { getRecipesWithParamAsync } from "store/recipes/recipes";
import { debounce } from "lodash-es";
import { IoSearch } from "react-icons/io5";
import { colorFourth, colorPrimary, colorThird } from "app/style/theme/theme";
import Input from "components/Input/Input";
import Icon from "components/Icon/Icon";
import InputGroup from "components/Input/InputGroup/InputGroup";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";

const debounceSearchAsync = debounce(
  (dispatch, searchValue, searchBarAction, postAction) => {
    if (searchValue !== "") {
      dispatch(searchBarAction(searchValue, postAction));
    }
  },
  2000,
  { leading: false }
);

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isCurrentRouteIgredients = pathname === "/ingredients";
  const isCurrentRouteRecipes = pathname === "/recipes";

  const searchByPlaceholder = `Search by ${
    isCurrentRouteIgredients ? `ingredients` : `recipes`
  }`;

  const placeholderValues = useBreakpointValue({
    base: searchByPlaceholder,
    sm: "Search",
    md: searchByPlaceholder,
  });

  const searchBarAction = isCurrentRouteIgredients
    ? getIngredientsWithParamAsync
    : getRecipesWithParamAsync;

  const handleChange = (e) => {
    const postAction =
      !isCurrentRouteIgredients && !isCurrentRouteRecipes
        ? () => navigate("/recipes")
        : undefined;
    debounceSearchAsync(dispatch, e.target.value, searchBarAction, postAction);
  };

  return (
    <InputGroup
      borderRadius="md"
      bg={colorFourth}
      borderColor={colorFourth}
      size="md"
      {...props}
    >
      <InputLeftElement color={colorThird}>
        <Icon w={4} as={IoSearch} color={colorThird} />
      </InputLeftElement>
      <Input
        onChange={handleChange}
        paddingLeft={10}
        placeholder={placeholderValues}
        focusBorderColor={colorPrimary}
        fontSize="0.9em"
      />
    </InputGroup>
  );
};
export default SearchBar;
