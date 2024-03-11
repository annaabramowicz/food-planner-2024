import Image from "components/Image/Image";
import Flex from "components/Flex/Flex";
import Box from "components/Box/Box";
import Heading from "components/Heading/Heading";
import {
  colorFifth,
  colorFourth,
  colorPrimary,
  colorSecondary,
} from "app/style/theme/theme";
import { Icon, Tag } from "@chakra-ui/react";
import { IoFlameOutline } from "react-icons/io5";

const Recipe = ({ recipe }) => {
  const macros = {
    Protein: recipe.protein,
    Fat: recipe.fat,
    Carbs: recipe.carbs,
  };

  return (
    <Box
      maxW={{ base: "150px", sm: "215px" }}
      h="251px"
      mb={2}
      border={`1px solid ${colorFourth}`}
      borderRadius="lg"
      overflow="hidden"
    >
      <Box pos="relative" h="148px">
        <Image
          src={`${recipe.image}`}
          alt={recipe.title}
          objectFit="cover"
          objectPosition={{ base: "-30px -6px", sm: "-10px -14px" }}
          pos="relative"
          zIndex="-1"
          h={{ base: "158px", sm: "172px" }}
        />
        <Tag
          pos="absolute"
          bottom={{ base: 1, sm: "-62px" }}
          left={1}
          zIndex="2"
          size="sm"
          fontSize="xs"
          variant="solid"
          color={colorSecondary}
          bg={colorFifth}
          p="0 4px 0 0"
        >
          <Icon w="20px" as={IoFlameOutline} />
          {recipe.calories}Cal
        </Tag>
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        pos="relative"
        zIndex="1"
        bg="white"
        h="98px"
      >
        <Heading size="xs" p="5px 0" textAlign="left">
          {recipe.title}
        </Heading>
        <Flex
          justifyContent={{ base: "space-between", sm: "flex-start" }}
          w={{ base: "145px", sm: "207px" }}
        >
          {Object.entries(macros).map(([key, value]) => (
            <Tag
              size="sm"
              fontSize="xs"
              variant="outline"
              border={`1px solid ${colorPrimary}`}
              color={colorPrimary}
              boxShadow="none"
              mr={{ sm: "2px" }}
            >
              {key}:<br />
              {value}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Recipe;
