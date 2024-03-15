import Image from "components/Image/Image";
import Flex from "components/Flex/Flex";
import {
  colorFifth,
  colorFourth,
  colorPrimary,
  colorPrimaryDark,
  colorSixth,
} from "app/style/theme/theme";
import config from "config/env";
import { getFridge, saveIngredientInFridge } from "services/localStorage";
import Box from "components/Box/Box";
import { Circle } from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io5";
import Icon from "components/Icon/Icon";

const FridgeIngredient = ({ ingredient }) => {
  const imageSize = `100x100`;
  const imageUrl = `${config.apiCdnUrl}ingredients_${imageSize}/`;

  const toggleClick = () => {
    saveIngredientInFridge(ingredient);
  };

  const selectedIngredients = getFridge();
  const selectedIngredientsId = selectedIngredients.map((ingre) => ingre.id);
  const id = selectedIngredientsId.includes(ingredient.id);

  return (
    <Flex
      onClick={toggleClick}
      flexDirection="column"
      pos="relative"
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

      <Circle
        pos="absolute"
        bottom="-4px"
        right="-4px"
        border={`1px solid ${colorFourth}`}
        bg={colorFifth}
        borderRadius="25px"
        height="25px"
        width="25px"
        color={colorSixth}
        _hover={{
          boxShadow: `0px 0px 0px 1px ${colorSixth}`,
          cursor: "pointer",
        }}
      >
        <Icon as={IoCheckmark} height="20px" />
      </Circle>
    </Flex>
  );
};

export default FridgeIngredient;
