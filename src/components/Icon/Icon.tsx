import { Icon as ChakraIcon } from "@chakra-ui/react";
import React from "react";

export type IconProps = React.ComponentProps<typeof ChakraIcon>;
const Icon = (props: IconProps) => <ChakraIcon w={7} h={7} {...props} />;

export default Icon;
