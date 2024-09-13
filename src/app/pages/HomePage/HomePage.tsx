import ImageSlider from "app/Slider/Slider";
import { colorPrimary, fontFamilyPrimary } from "app/style/theme/theme";
import Flex from "components/Flex/Flex";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";
import { useIngredientsData } from "store/ingredients/ingredients";

const HomePage = () => {
  const ingredients = useIngredientsData();

  return (
    <Flex flexDirection="column" justifyContent="space-around" height="73vh">
      <Heading
        fontFamily={fontFamilyPrimary}
        color={colorPrimary}
        textAlign="center"
      >
        Food Planner
      </Heading>
      <Text>
        Search, find, and discover interesting recipes. You can also easily
        compose your shopping list by searching for a variety of ingredients and
        adding them to your fridge. Data is fetching from an external API and
        prepared appropriately.
      </Text>
      <ImageSlider ingredients={ingredients} />
    </Flex>
  );
};

export default HomePage;
