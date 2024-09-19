import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import initialIngredients from "store/ingredients/initialIngredients";
import config from "config/env";
import { colorFifth, colorFourth } from "app/style/theme/theme";
import { useBreakpointValue } from "@chakra-ui/react";

export default function IngredientsSlider() {
  const imageUrlSize = useBreakpointValue({
    base: `250x250`,
    sm: `100x100`,
  });

  const imageUrl = `${config.apiCdnUrl}ingredients_${imageUrlSize}/`;
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const responsiveValues = useBreakpointValue({
    base: {
      circleSize: "200px",
      padding: "30px",
      width: "91%",
    },
    sm: {
      circleSize: "150px",
      padding: "0px",
      width: "100%",
    },
  });

  const imageStyle: React.CSSProperties = {
    height: responsiveValues?.circleSize,
    width: responsiveValues?.circleSize,
    objectFit: "scale-down",
    borderRadius: "50%",
    border: `2px solid ${colorFourth}`,
    margin: "0 auto",
    padding: responsiveValues?.padding,
    backgroundColor: colorFifth,
  };

  return (
    <div
      style={{
        height: responsiveValues?.circleSize,
        width: responsiveValues?.width,
      }}
    >
      <Slider {...settings}>
        {initialIngredients.map((ingredient) => (
          <div key={ingredient.id}>
            <img
              src={`${imageUrl}${ingredient.image}`}
              alt={ingredient.name}
              style={imageStyle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
