export interface IThemeBreakpoints {
  mobile: string;
  tablet: string;
  desktopsm: string;
  desktopmd: string;
}

export const themeBreakpoints: IThemeBreakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktopsm: "1024px",
  desktopmd: "1440px",
};

export const materialBreakpoints = {
  values: {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1600,
  },
};
