import { useBreakpointValue } from "@chakra-ui/media-query";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getIngredientsWithParamAsync,
  useIngredientsData,
} from "store/ingredients/ingredients";
import {
  getRecipesWithParamAsync,
  useRecipesData,
} from "store/recipes/recipes";
import { IoSearch } from "react-icons/io5";
import { colorFourth, colorPrimary, colorThird } from "app/style/theme/theme";
import { ChangeEvent, useState } from "react";
import Input from "components/Input/Input";
import Icon from "components/Icon/Icon";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import InputRightElement from "components/Input/InputRightElement/InputRightElement";
import InputGroup, {
  InputGroupProps,
} from "components/Input/InputGroup/InputGroup";
import { useAppDispatch } from "store/store";
import { useDebounce } from "react-use";
import Spinner from "components/Spinner/Spinner";

type SearchBarProps = InputGroupProps;

const SearchBar = (props: SearchBarProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const isCurrentRouteIngredients = pathname === "/ingredients";
  const isCurrentRouteRecipes = pathname === "/recipes";
  const { isLoading: isIngredientsLoading } = useIngredientsData();
  const { isLoading: isRecipesLoading } = useRecipesData();
  const isLoading = isIngredientsLoading || isRecipesLoading;

  const searchByPlaceholder = `Search by ${
    isCurrentRouteIngredients ? `ingredients` : `recipes`
  }`;

  const placeholderValues = useBreakpointValue({
    base: searchByPlaceholder,
    sm: "Search",
    md: searchByPlaceholder,
  });

  const postAction =
    !isCurrentRouteIngredients && !isCurrentRouteRecipes
      ? () => navigate("/recipes")
      : undefined;

  const searchBarAction = (value: string) =>
    isCurrentRouteIngredients
      ? getIngredientsWithParamAsync(value)
      : getRecipesWithParamAsync(value);

  useDebounce(
    () => {
      if (postAction && searchTerm) postAction();
      if (searchTerm !== "") {
        dispatch(searchBarAction(searchTerm));
      }
    },
    2000,
    [searchTerm]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
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
      <InputRightElement>{isLoading && <Spinner />}</InputRightElement>
    </InputGroup>
  );
};
export default SearchBar;
