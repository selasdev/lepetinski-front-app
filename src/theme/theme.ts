import { IThemeColors, themeColors as colors } from "./colors";
import {
  ThemeTypeWeight,
  ThemeTypography,
  themeTypeWeight as typeWeight,
  themeTypography as typography,
} from "./typography";
import {
  IThemeBreakpoints,
  themeBreakpoints as breakpoints,
} from "./breakpoints";

export interface ILepetinskiTheme {
  colors: IThemeColors;
  typeWeight: ThemeTypeWeight;
  typography: ThemeTypography;
  breakpoints: IThemeBreakpoints;
}

export const theme: ILepetinskiTheme = {
  colors,
  typeWeight,
  typography,
  breakpoints,
};
