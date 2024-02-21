import { colorFourth } from "app/style/theme/theme";
import Input from "components/Input/Input";

const SearchBar = () => (

  <Input
    placeholder="Basic usage"
    border="1px"
    borderColor={colorFourth}
    w="100px"
    h="20px"
  />
);
export default SearchBar;
