import Image from "components/Image/Image";
import Flex from "components/Flex/Flex";
import Box from "components/Box/Box";
import Heading from "components/Heading/Heading";
import {
  colorFifth,
  colorFourth,
  colorSecondary,
} from "app/style/theme/theme";
import { Icon, Tag } from "@chakra-ui/react";
import { IoFlameOutline } from "react-icons/io5";

const Recipe = ({ recipe }) => {
  const [calories, protein, fat, carb] = recipe.nutrition.nutrients;

  return (
    <Box
      maxW={{ base: "210px", sm: "255px" }}
      height={{ base: "238px", sm: "256px" }}
      mb={2}
      border={`1px solid ${colorFourth}`}
      borderRadius="lg"
      overflow="hidden"
      fontWeight="bold"
    >
      <Box pos="relative" h="148px">
        <Image
          src={`${recipe.image}`}
          alt={recipe.title}
          loading="lazy"
          objectFit="cover"
          objectPosition="-10px -17px"
          pos="relative"
          zIndex="-1"
          height={{ base: "180px", sm: "204px" }}
        />
        <Tag
          pos="absolute"
          bottom={{ base: 1, sm: "-101px" }}
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
          {Math.floor(calories.amount)} Cal
        </Tag>
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        pos="relative"
        zIndex="1"
        bg="white"
        h={{ base: "93px", sm: "80px" }}
        p={1}
      >
        <Heading size="xs" p="5px 0" textAlign="left">
          {recipe.title}
        </Heading>
        <Flex justifyContent="flex-start" w={{ base: "210px", sm: "255px" }}>
          <Tag fontSize="xs" bg="white" p={0} mr={1}>
            Protein: {Math.floor(protein.amount)}g
          </Tag>
          <Tag fontSize="xs" bg="white" p={0} mr={1}>
            Fat: {Math.floor(fat.amount)}g
          </Tag>
          <Tag fontSize="xs" bg="white" p={0}>
            Carb: {Math.floor(carb.amount)}g
          </Tag>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Recipe;
