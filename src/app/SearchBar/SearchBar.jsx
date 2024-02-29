import { useBreakpointValue } from "@chakra-ui/media-query";
import { colorFourth, colorThird } from "app/style/theme/theme";
import Input from "components/Input/Input";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getIngredientsAsync } from "store/ingredients/ingredients";
import { IoSearch } from "react-icons/io5";
import Icon from "components/Icon/Icon";
import InputGroup from "components/Input/InputGroup/InputGroup";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const placeholderValue = useBreakpointValue({
    base: "Search ingredients",
    sm: "Search",
  });

  useEffect(() => {
    dispatch(getIngredientsAsync(searchValue));
  }, [dispatch, searchValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
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
        fontSize="0.9em"
        paddingLeft={10}
        placeholder={placeholderValue}
      />
    </InputGroup>
  );
};
export default SearchBar;
