import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = (props) => (
  <ChakraSpinner
    pos="fixed"
    top="50%"
    left="50%"
    transform="translate(-50%,-50%)"
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
    {...props}
  />
);

export default Spinner;
