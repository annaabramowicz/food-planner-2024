import { extendTheme } from "@chakra-ui/react";
import "@fontsource/yeseva-one";
import "@fontsource/orelega-one";

export const colorPrimary = "#06A561";
export const colorPrimaryDark = "#17B672";
export const colorSecondary = "#131523";
export const colorThird = "#7E84A3";
export const colorFourth = "#E6E9F4";
export const colorFifth = "#FBFBFB";
export const colorSixth = "#f30707";

export const fontFamilyPrimary =
  "Yeseva One, Orelega One, Times New Roman, serif";
export const fontFamilySecondary = "Rota, Arial, sans-serif";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: fontFamilySecondary,
        fontSize: "16px",
        fontWeight: "700",
      },
    },
  },
});

export default theme;
