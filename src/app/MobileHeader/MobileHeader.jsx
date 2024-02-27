import { fontFamilyPrimary } from "app/style/theme/theme";
import Heading from "components/Heading/Heading";

const MobileHeader = (props) => (
  <Heading
    fontFamily={fontFamilyPrimary}
    display={{ sm: "none" }}
    textAlign="left"
    {...props}
  ></Heading>
);

export default MobileHeader;
