import { fontFamilyPrimary } from "app/style/theme/theme";
import Heading from "components/Heading/Heading";
import { ReactNode } from "react";

type MobileHeaderProps = {
  children: ReactNode;
};

const MobileHeader = (props: MobileHeaderProps) => (
  <Heading
    fontFamily={fontFamilyPrimary}
    display={{ sm: "none" }}
    textAlign="left"
    {...props}
  ></Heading>
);

export default MobileHeader;
