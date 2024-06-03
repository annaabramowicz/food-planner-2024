import NavigationLogo from "./NavigationLogo/NavigationLogo";
import SearchBar from "app/SearchBar/SearchBar";
import {
  colorFourth,
  colorPrimary,
  colorPrimaryDark,
} from "app/style/theme/theme";
import Box from "components/Box/Box";
import Flex from "components/Flex/Flex";
import { NavLink, useLocation } from "react-router-dom";
import routes from "routes/routes";

function TabletDesktopNavigation() {
  const location = useLocation();
  return (
    <>
      <Flex justifyContent="space-between">
        <Flex>
          <Box display={{ base: "none", sm: "block" }}>
            <NavigationLogo />
          </Box>
          <Flex
            justifyContent="space-evenly"
            w={{ sm: "280px", md: "380px" }}
            h="100px"
            pos="relative"
            top={0}
            left={0}
            right={0}
            zIndex={1}
          >
            {routes.map((route) => {
              const activeLinkStyle =
                location.pathname === route.path
                  ? {
                      color: { colorPrimary },
                      borderBottom: `2px solid ${colorPrimary}`,
                      position: "relative",
                      top: "20px",
                      paddingBottom: "38px",
                    }
                  : {};
              return (
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? `${colorPrimary}` : "black",
                    };
                  }}
                  key={route.path}
                  to={route.path}
                >
                  <Flex
                    flexDirection="column"
                    _hover={{ color: colorPrimaryDark }}
                    {...activeLinkStyle}
                  >
                    {route.title}
                  </Flex>
                </NavLink>
              );
            })}
          </Flex>
        </Flex>
        <SearchBar minW="105px" w="200px" bg="white"/>
      </Flex>
      <Box
        width="130%"
        marginLeft="-30px"
        borderBottom={`2px solid ${colorFourth}`}
      />
    </>
  );
}

export default TabletDesktopNavigation;
