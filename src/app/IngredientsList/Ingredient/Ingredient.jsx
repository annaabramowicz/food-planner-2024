import Image from "components/Image/Image";
import Flex from "components/Flex/Flex";
import { colorFourth } from "app/style/theme/theme";
import config from "config/env";

const Ingredient = ({ ingredient }) => {
  const imageSize = `100x100`;
  const imageUrl = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  return (
    <Flex
      flexDirection="column"
      minWidth={120}
      h={100}
      p="0 10px"
      m={1}
      border={`1px solid ${colorFourth}`}
      borderRadius="md"
      fontSize="0.9em"
    >
      <Image
        src={`${imageUrl}${ingredient.image}`}
        alt={ingredient.name}
        objectFit="contain"
        h="60px"
        htmlHeight="60px"
      />
      {ingredient.name}
    </Flex>
  );
};

export default Ingredient;
