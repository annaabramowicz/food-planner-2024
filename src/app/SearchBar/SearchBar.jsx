import { useBreakpointValue } from "@chakra-ui/media-query";
import { colorFourth, colorPrimary, colorThird } from "app/style/theme/theme";
import Input from "components/Input/Input";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getIngredientsAsync } from "store/ingredients/ingredients";
import { IoSearch } from "react-icons/io5";
import Icon from "components/Icon/Icon";
import InputGroup from "components/Input/InputGroup/InputGroup";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import { useLocation, useNavigate } from "react-router-dom";
import { debounce } from "lodash-es";

const debounceSearchIngredientsAsync = debounce(
  (dispatch, searchValue, navigate) => {
    dispatch(getIngredientsAsync(searchValue));
    navigate("/ingredients");
  },
  2000,
  { leading: false }
);

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [newValue, setNewValue] = useState("");
  const navigate = useNavigate();

  const placeholderValues = {
    ingredients: useBreakpointValue({
      base: "Search ingredients",
      sm: "Search",
      md: "Search ingredients",
    }),
    recipes: useBreakpointValue({
      base: "Search recipes",
      sm: "Search",
      md: "Search recipes",
    }),
  };

  const placeholderValue =
    location.pathname === "/ingredients"
      ? placeholderValues.ingredients
      : placeholderValues.recipes;

  const handleChange = (e) => {
    const value = e.target.value;
    setNewValue(value);
  };

  useEffect(() => {
    newValue && debounceSearchIngredientsAsync(dispatch, newValue, navigate);
  }, [dispatch, newValue, navigate]);

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
