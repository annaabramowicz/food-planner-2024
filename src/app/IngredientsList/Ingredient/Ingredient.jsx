import { colorFourth } from "app/style/theme/theme";
import Image from "components/Image/Image";
import Flex from "components/Flex/Flex";

const Ingredient = ({ ingredient }) => {
  const imageSize = `100x100`;
  const imageUrl = `https://spoonacular.com/cdn/ingredients_${imageSize}/`;
  return (
    <Flex
      flexDirection="column"
      w={100}
      h={100}
      mt={2}
      border={`1px solid ${colorFourth}`}
      borderRadius="md"
      fontSize="0.9em"
    >
      <Image
        src={`${imageUrl}${ingredient.image}`}
        alt={ingredient.name}
        objectFit="contain"
        boxSize={50}
        minWidth={50}
      />
      {ingredient.name}
    </Flex>
  );
};

export default Ingredient;
