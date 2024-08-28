import Image from "components/Image/Image";
import Flex from "components/Flex/Flex";
import { colorFifth, colorFourth, colorSixth } from "app/style/theme/theme";
import config from "config/env";
import Circle from "components/Circle/Circle";
import { IoCloseOutline } from "react-icons/io5";
import Icon from "components/Icon/Icon";
import { removeIngredientFromFridgeAsync } from "store/fridge/fridge";
import { useAppDispatch } from "store/useAppDispatch";

type IngredientProps = {
  ingredient: { id: number; name: string; image: string };
};

const hoverUIstyle = {
  boxShadow: `0px 0px 0px 1px ${colorSixth}`,
  cursor: "pointer",
};

const FridgeIngredient = ({ ingredient }: IngredientProps) => {
  const dispatch = useAppDispatch();
  const imageSize = `100x100`;
  const imageUrl = `${config.apiCdnUrl}ingredients_${imageSize}/`;

  const toggleClick = () => {
    dispatch(removeIngredientFromFridgeAsync(ingredient.id));
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
        color={colorSixth}
        _hover={hoverUIstyle}
      >
        <Icon as={IoCloseOutline} height="20px" />
      </Circle>
    </Flex>
  );
};

export default FridgeIngredient;
