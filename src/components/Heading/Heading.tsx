import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/layout";

const Heading = (props: HeadingProps) => (
  <ChakraHeading paddingTop={5} {...props} />
);

export default Heading;
