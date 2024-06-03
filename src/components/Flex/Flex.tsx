import { Flex as ChakraFlex, FlexProps } from "@chakra-ui/layout";

const Flex = (props: FlexProps) => (
  <ChakraFlex alignItems="center" justifyContent="center" {...props} />
);

export default Flex;
