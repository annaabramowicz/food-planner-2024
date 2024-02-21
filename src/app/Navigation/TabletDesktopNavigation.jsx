import SearchBar from "app/SearchBar/SearchBar";
import {
  colorPrimary,
  colorPrimaryDark,
  colorThird,
} from "app/style/theme/theme";
import Box from "components/Box/Box";
import Flex from "components/Flex/Flex";
import Logo from "components/Logo/Logo";
import { NavLink, useLocation } from "react-router-dom";
import routes from "routes/routes";

function TabletDesktopNavigation() {
  const location = useLocation();
  return (
    <Flex borderBottom={`1px solid ${colorThird}`}>
      <Box display={{ base: "none", sm: "block" }}>
        <Logo />
      </Box>
      <Flex
        justifyContent="space-around"
        w="100%"
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
                  borderBottom: `1px solid ${colorPrimary}`,
                  position: "relative",
                  top: "19px",
                  paddingBottom: "38px",
                }
              : {};
          return (
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? `${colorPrimaryDark}` : "black",
                };
              }}
              key={route.path}
              to={route.path}
            >
              <Flex
                // pos="relative"
                // top="20px"
                // pb="35px"
                //   m={2}
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
      <SearchBar />
    </Flex>
  );
}

export default TabletDesktopNavigation;
