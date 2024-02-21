import MobileNavigation from "./MobileNavigation";
import TabletDesktopNavigation from "./TabletDesktopNavigation";
import Box from "components/Box/Box";

const Navigation = () => {
  return (
    <>
      <Box display={{ sm: "none" }}>
        <MobileNavigation />
      </Box>
      <Box display={{ base: "none", sm: "block" }}>
        <TabletDesktopNavigation />
      </Box>
    </>
  );
};

export default Navigation;
