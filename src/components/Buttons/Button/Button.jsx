import { Button as ChakraButton } from "@chakra-ui/button";

const Button = (props) => (
  <ChakraButton colorScheme="teal" ml={2} variant="solid" {...props} />
);

export default Button;
