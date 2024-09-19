import { useBreakpointValue } from "@chakra-ui/media-query";
import { useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import {
  colorFifth,
  colorFourth,
  colorPrimary,
  colorThird,
} from "app/style/theme/theme";
import Input from "components/Input/Input";
import Icon from "components/Icon/Icon";
import InputLeftElement from "components/Input/InputLeftElement/InputLeftElement";
import InputRightElement from "components/Input/InputRightElement/InputRightElement";
import InputGroup, {
  InputGroupProps,
} from "components/Input/InputGroup/InputGroup";
import Spinner from "components/Spinner/Spinner";
import useLoadingState from "hooks/useLoadingState";
import useSearch from "hooks/useSearch";

type SearchBarProps = InputGroupProps;

const SearchBar = (props: SearchBarProps) => {
  const isLoading = useLoadingState();
  const handleChange = useSearch();
  const { pathname } = useLocation();
  const isCurrentRouteIngredients = pathname === "/ingredients";

  const searchByPlaceholder = `Search by ${
    isCurrentRouteIngredients ? `ingredients` : `recipes`
  }`;

  const placeholderValues = useBreakpointValue({
    base: searchByPlaceholder,
    sm: "Search",
    md: searchByPlaceholder,
  });

  return (
    <InputGroup
      borderRadius="md"
      bg={colorFifth}
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
