import Image from "components/Image/Image";
import Flex from "components/Flex/Flex";
import Circle from "components/Circle/Circle";
import Icon from "components/Icon/Icon";
import {
  colorFifth,
  colorFourth,
  colorPrimary,
  colorPrimaryDark,
} from "app/style/theme/theme";
import { IoCheckmark } from "react-icons/io5";
import config from "config/env";
import { useFridgeIngredients } from "hooks/useFridgeIngredients"; 

type IngredientProps = {
  ingredient: { id: number; name: string; image: string };
};

const hoverUIstylePointer = {
  boxShadow: `0px 0px 0px 2px ${colorPrimaryDark}`,
  color: colorPrimary,
  cursor: "pointer",
};

const hoverUIstyle = {
  boxShadow: `0px 0px 0px 2px ${colorPrimary}`,
  color: colorPrimary,
};

const Ingredient = ({ ingredient }: IngredientProps) => {
  const { removeFridgeIngredient, saveFridgeIngredient, isIngredientInFridge } =
    useFridgeIngredients();

  const imageSize = `100x100`;
  const imageUrl = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  const isIngredientSelected = isIngredientInFridge(ingredient.id);

  const toggleClick = () => {
    isIngredientSelected
      ? removeFridgeIngredient(ingredient.id)
      : saveFridgeIngredient(ingredient);
  };

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
      _hover={hoverUIstylePointer}
      {...(isIngredientSelected && hoverUIstyle)}
    >
      <Image
        src={`${imageUrl}${ingredient.image}`}
        alt={ingredient.name}
        objectFit="contain"
        h="60px"
        htmlHeight="60px"
        {...(isIngredientSelected && {
          opacity: "0.5",
        })}
      />
      {ingredient.name}
      {isIngredientSelected && (
        <Circle
          pos="absolute"
          backgroundColor={colorPrimary}
          color={colorFifth}
          data-testid="checkmark"
        >
          <Icon as={IoCheckmark} height="15px" />
        </Circle>
      )}
    </Flex>
  );
};

export default Ingredient;
