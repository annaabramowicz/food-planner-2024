import Flex from "components/Flex/Flex";
import Icon from "components/Icon/Icon";
import { Link } from "react-router-dom";
import routes from "routes/routes";

const MobileNavigation = () => {
  return (
    <Flex
      bg="white"
      borderTop="1px"
      borderColor="orange"
      justifyContent="space-around"
      w="100%"
      h="100px"
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
    >
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          <Flex
            flexDirection="column"
          >
            <Icon as={route.icon} />

            {route.title}
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};

export default MobileNavigation;
