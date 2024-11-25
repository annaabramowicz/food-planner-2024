import IngredientsSlider from "app/Slider/IngredientsSlider";
import { colorPrimaryDark, fontFamilyPrimary } from "app/style/theme/theme";
import Flex from "components/Flex/Flex";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";

const HomePage = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-evenly"
      height={{ base: "66vh", sm: "80vh" }}
    >
      <Heading
        fontFamily={fontFamilyPrimary}
        textColor={colorPrimaryDark}
        fontSize="3em"
      >
        Food Planner
      </Heading>
      <Text maxW={{ md: "1000px" }} fontSize={{ xl: "xl" }}>
        Discover interesting recipes and find inspiration for your meals.
        Creating a shopping list has never been easier, just search for the
        ingredients you need and add them to your virtual fridge. All data is
        fetched from an external API and carefully prepared to make planning and
        cooking simple and enjoyable. With everything at your fingertips, you
        can focus on the joy of cooking without the hassle.
      </Text>
      <IngredientsSlider />
    </Flex>
  );
};

export default HomePage;
