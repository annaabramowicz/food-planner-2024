import { useBreakpointValue } from "@chakra-ui/media-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getIngredientsWithParamAsync } from "store/ingredients/ingredients";
import { getRecipesWithParamAsync } from "store/recipes/recipes";
import { debounce } from "lodash-es";
import { IoSearch } from "react-icons/io5";
import { colorFourth, colorPrimary, colorThird } from "app/style/theme/theme";
import { ChangeEvent } from "react";
import Input from "components/Input/Input";
import Icon from "components/Icon/Icon";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import InputGroup, {
  InputGroupProps,
} from "components/Input/InputGroup/InputGroup";
import { useAppDispatch } from "store/store";

type SearchBarProps = InputGroupProps;

const debounceSearchAsync = debounce(
  (dispatch, searchValue, searchBarAction, postAction) => {
    if (postAction && searchValue) postAction();
    if (searchValue !== "") {
      dispatch(searchBarAction(searchValue));
    }
  },
  2000,
  { leading: false }
);

const SearchBar = (props: SearchBarProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isCurrentRouteIngredients = pathname === "/ingredients";
  const isCurrentRouteRecipes = pathname === "/recipes";

  const searchByPlaceholder = `Search by ${
    isCurrentRouteIngredients ? `ingredients` : `recipes`
  }`;

  const placeholderValues = useBreakpointValue({
    base: searchByPlaceholder,
    sm: "Search",
    md: searchByPlaceholder,
  });

  const searchBarAction = isCurrentRouteIngredients
    ? getIngredientsWithParamAsync
    : getRecipesWithParamAsync;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const postAction =
      !isCurrentRouteIngredients && !isCurrentRouteRecipes
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
