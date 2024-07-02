import { Flex as ChakraFlex, FlexProps } from "@chakra-ui/layout";

const Flex = (props: FlexProps) => (
  <ChakraFlex alignItems="center" justifyContent="center" {...props} />
);

export type { FlexProps } from "@chakra-ui/react"; 
export default Flex;
