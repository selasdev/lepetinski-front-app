export interface IThemeColors {
  primary: {
    default: string;
  };
  secondary: {
    default: string;
    white: string;
  };
  info: {
    default: string;
    light: string;
  };
  error: {
    default: string;
  };
  warning: {
    default: string;
  };
  success: {
    default: string;
  };
  black: {
    default: string;
  };
}

export const themeColors: IThemeColors = {
  primary: {
    default: "#FF6B35",
  },
  secondary: {
    default: "#F7C59F",
    white: "#EFEFD0",
  },
  info: {
    default: "#004E89",
    light: "#1A659E",
  },
  error: {
    default: "#CB3120",
  },
  warning: {
    default: "#EEAD3C",
  },
  success: { default: "#4A9835" },
  black: {
    default: "#000000",
  },
};
