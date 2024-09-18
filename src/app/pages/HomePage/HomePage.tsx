import IngredientsSlider from "app/Slider/IngredientsSlider";
import { colorPrimaryDark, fontFamilyPrimary } from "app/style/theme/theme";
import Flex from "components/Flex/Flex";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";

const HomePage = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      height={{ base: "70vh", sm: "80vh" }}
    >
      <Heading
        fontFamily={fontFamilyPrimary}
        textColor={colorPrimaryDark}
        fontSize="3em"
      >
        Food Planner
      </Heading>
      <Text maxW={{ md: "1000px" }} fontSize={{ xl: "xl" }}>
        Search, find, and discover interesting recipes. You can also easily
        compose your shopping list by searching for a variety of ingredients and
        adding them to your fridge. Data is fetching from an external API and
        prepared appropriately.
      </Text>
      <IngredientsSlider />
    </Flex>
  );
};

export default HomePage;
