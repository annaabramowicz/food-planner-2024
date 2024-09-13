import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Ingredient as IngredientProps } from "lib/types";
import config from "config/env";

type IngredientsProps = {
  ingredients: {
    ingredients: IngredientProps[];
  };
  isLoading?: boolean;
};

const ImageSlider = ({ ingredients }: IngredientsProps) => {
  const imageSize = `500x500`;

  const imageUrl = `${config.apiCdnUrl}ingredients_${imageSize}/`;

  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      autoPlay
      interval={8000}
    >
      {ingredients.ingredients.map((ingredient) => {
        return (
          <Image
            src={`${imageUrl}${ingredient.image}`}
            objectFit="contain"
            h="180px"
            htmlHeight="180px"
          />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
