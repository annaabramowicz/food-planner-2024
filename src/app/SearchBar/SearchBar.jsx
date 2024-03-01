import { useBreakpointValue } from "@chakra-ui/media-query";
import { colorFourth, colorPrimary, colorThird } from "app/style/theme/theme";
import Input from "components/Input/Input";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getIngredientsAsync } from "store/ingredients/ingredients";
import { IoSearch } from "react-icons/io5";
import Icon from "components/Icon/Icon";
import InputGroup from "components/Input/InputGroup/InputGroup";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import { useLocation } from "react-router-dom";
import { debounce } from "lodash-es";

const throttleSearchIngredientsAsync = debounce(
  (dispatch, searchValue) => {
    dispatch(getIngredientsAsync(searchValue));
  },
  2000,
  { leading: false }
);

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const placeholderIngredients = useBreakpointValue({
    base: "Search ingredients",
    sm: "Search",
    md: "Search ingredients",
  });

  const placeholderRecipes = useBreakpointValue({
    base: "Search recipes",
    sm: "Search",
    md: "Search recipes",
  });

  const placeholderValue =
    location.pathname === "/ingredients"
      ? placeholderIngredients
      : placeholderRecipes;

  const handleChange = (e) => {
    const value = e.target.value;
    throttleSearchIngredientsAsync(dispatch, value);
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
        placeholder={placeholderValue}
        focusBorderColor={colorPrimary}
        fontSize="0.9em"
      />
    </InputGroup>
  );
};
export default SearchBar;
