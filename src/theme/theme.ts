import { IThemeColors, themeColors as colors } from "./colors";
import {
  ThemeTypeWeight,
  ThemeTypography,
  themeTypeWeight as typeWeight,
  themeTypography as typography,
} from "./typography";

export interface ILepetinskiTheme {
  colors: IThemeColors;
  typeWeight: ThemeTypeWeight;
  typography: ThemeTypography;
}

export const theme: ILepetinskiTheme = {
  colors,
  typeWeight,
  typography,
};
