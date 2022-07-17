export type TypeWeightType =
  | "light"
  | "normal"
  | "medium"
  | "bold"
  | "extraBold";

export type TypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "buttonlg"
  | "buttonmd"
  | "buttonsm";

export interface ITypographyKeys {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
}

export type ThemeTypeWeight = Record<TypeWeightType, number>;

export type ThemeTypography = Record<TypographyType, ITypographyKeys>;

export const themeTypeWeight: ThemeTypeWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
  extraBold: 900,
};

export const themeTypography: ThemeTypography = {
  h1: {
    fontSize: `${96 / 16}rem`,
    lineHeight: "144px",
    fontWeight: themeTypeWeight.bold,
  },
  h2: {
    fontSize: `${64 / 16}rem`,
    lineHeight: "92px",
    fontWeight: themeTypeWeight.bold,
  },
  h3: {
    fontSize: `${48 / 16}rem`,
    lineHeight: "72px",
    fontWeight: themeTypeWeight.bold,
  },
  h4: {
    fontSize: `${32 / 16}rem`,
    lineHeight: "48px",
    fontWeight: themeTypeWeight.bold,
  },
  h5: {
    fontSize: `${24 / 16}rem`,
    lineHeight: "36px",
    fontWeight: themeTypeWeight.bold,
  },
  h6: {
    fontSize: `${20 / 16}rem`,
    lineHeight: "30px",
    fontWeight: themeTypeWeight.bold,
  },
  subtitle1: {
    fontSize: `${16 / 16}rem`,
    lineHeight: "24px",
    fontWeight: themeTypeWeight.normal,
  },
  subtitle2: {
    fontSize: `${14 / 16}rem`,
    lineHeight: "22px",
    fontWeight: themeTypeWeight.normal,
  },
  body1: {
    fontSize: `${16 / 16}rem`,
    lineHeight: "28px",
    fontWeight: themeTypeWeight.normal,
  },
  body2: {
    fontSize: `${15 / 16}rem`,
    lineHeight: "26px",
    fontWeight: themeTypeWeight.normal,
  },
  buttonlg: {
    fontSize: `${15 / 16}rem`,
    lineHeight: "26px",
    fontWeight: themeTypeWeight.normal,
  },
  buttonmd: {
    fontSize: `${14 / 16}rem`,
    lineHeight: "26px",
    fontWeight: themeTypeWeight.normal,
  },
  buttonsm: {
    fontSize: `${13 / 16}rem`,
    lineHeight: "26px",
    fontWeight: themeTypeWeight.normal,
  },
};
