import { useBreakpointValue } from "@chakra-ui/media-query";
import { colorFourth, colorPrimary, colorThird } from "app/style/theme/theme";
import Input from "components/Input/Input";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getIngredientsWithParamAsync } from "store/ingredients/ingredients";
import { IoSearch } from "react-icons/io5";
import Icon from "components/Icon/Icon";
import InputGroup from "components/Input/InputGroup/InputGroup";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import { useLocation, useNavigate } from "react-router-dom";
import { debounce } from "lodash-es";
import { getRecipesWithParamAsync } from "store/recipes/recipes";

const debounceSearchIngredientsAsync = debounce(
  (dispatch, searchValue, navigate, setInputValue) => {
    dispatch(getIngredientsWithParamAsync(searchValue));
    setInputValue("");
    navigate("/ingredients");
  },
  2000,
  { leading: false }
);
const debounceSearchRecipesAsync = debounce(
  (dispatch, searchValue, navigate, setInputValue) => {
    dispatch(getRecipesWithParamAsync(searchValue));
    setInputValue("");
    navigate("/recipes");
  },
  2000,
  { leading: false }
);

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const isCurrentRouteIgredients = pathname === "/ingredients";
  console.log(isCurrentRouteIgredients);

  const searchByPlaceholder = `Search by ${
    isCurrentRouteIgredients ? `ingredients` : `recipes`
  }`;

  const placeholderValues = useBreakpointValue({
    base: searchByPlaceholder,
    sm: "Search",
    md: searchByPlaceholder,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    isCurrentRouteIgredients &&
      inputValue &&
      debounceSearchIngredientsAsync(
        dispatch,
        inputValue,
        navigate,
        setInputValue
      );
  }, [dispatch, inputValue, navigate, isCurrentRouteIgredients]);

  useEffect(() => {
    !isCurrentRouteIgredients &&
      inputValue &&
      debounceSearchRecipesAsync(dispatch, inputValue, navigate, setInputValue);
  }, [dispatch, inputValue, navigate, isCurrentRouteIgredients]);

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
        value={inputValue}
        paddingLeft={10}
        placeholder={placeholderValues}
        focusBorderColor={colorPrimary}
        fontSize="0.9em"
      />
    </InputGroup>
  );
};
export default SearchBar;
