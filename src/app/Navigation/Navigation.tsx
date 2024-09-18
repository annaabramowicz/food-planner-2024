import { colorFifth } from "app/style/theme/theme";
import MobileNavigation from "./MobileNavigation";
import TabletDesktopNavigation from "./TabletDesktopNavigation";
import Box from "components/Box/Box";

const Navigation = () => {
  return (
    <>
      <Box display={{ sm: "none" }}>
        <MobileNavigation />
      </Box>
      <Box
        display={{ base: "none", sm: "block" }}
        backgroundColor={colorFifth}
        margin="-5px -30px 0"
      >
        <TabletDesktopNavigation />
      </Box>
    </>
  );
};

export default Navigation;
