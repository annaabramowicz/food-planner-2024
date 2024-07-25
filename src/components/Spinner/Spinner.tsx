import { Spinner as ChakraSpinner, SpinnerProps } from "@chakra-ui/react";

const Spinner = (props: SpinnerProps) => (
  <ChakraSpinner
    speed="1s"
    emptyColor="gray.200"
    color="blue.500"
    {...props}
  />
);

export default Spinner;
