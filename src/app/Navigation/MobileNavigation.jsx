import {
  colorFourth,
  colorPrimary,
  colorPrimaryDark,
  colorSecondary,
} from "app/style/theme/theme";
import Flex from "components/Flex/Flex";
import Icon from "components/Icon/Icon";
import { NavLink } from "react-router-dom";
import routes from "routes/routes";

const MobileNavigation = () => {
  return (
    <Flex
      bg="white"
      borderTop={`1px solid ${colorFourth}`}
      justifyContent="space-around"
      w="100%"
      h="100px"
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={2}
    >
      {routes.map((route) => (
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? `${colorPrimary}` : `${colorSecondary}`,
            };
          }}
          key={route.path}
          to={route.path}
        >
          <Flex flexDirection="column" _hover={{ color: colorPrimaryDark }}>
            <Icon as={route.icon} />
            {route.title}
          </Flex>
        </NavLink>
      ))}
    </Flex>
  );
};

export default MobileNavigation;
