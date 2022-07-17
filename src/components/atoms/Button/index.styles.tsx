import styled, { css } from "styled-components";
import { IThemeColors } from "../../../theme/colors";

type ButtonThemesType =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "white";

export interface IStyledButton {
  styleType?: "default" | "outline" | "borderless";
  size?: "large" | "medium" | "small";
  variant?: ButtonThemesType;
}

const parseThemeColor = (
  themeColors: IThemeColors,
  theme?: ButtonThemesType
): string => {
  switch (theme) {
    case "primary":
      return themeColors.primary.default;

    case "secondary":
      return themeColors.secondary.default;

    case "error":
      return themeColors.error.default;

    case "info":
      return themeColors.info.default;

    case "success":
      return themeColors.success.default;

    case "warning":
      return themeColors.warning.default;

    case "white":
      return themeColors.secondary.white;

    default:
      return themeColors.primary.default;
  }
};

export const StyledButton = styled.button<IStyledButton>`
  cursor: pointer;
  border-radius: 4px;
  ${({ size }) =>
    size === "large"
      ? css`
          ${({ theme }) => theme.typography.buttonlg}
          padding: 8px 22px;
        `
      : size === "medium"
      ? css`
          ${({ theme }) => theme.typography.buttonmd}
          padding: 6px 16px;
        `
      : css`
          ${({ theme }) => theme.typography.buttonsm}
          padding: 4px 10px;
        `}

  ${({ styleType, variant }) =>
    styleType === "default"
      ? css`
          background-color: ${({ theme }) =>
            parseThemeColor(theme.colors, variant)};
          color: #fff;
          border: 1px solid
            ${({ theme }) => parseThemeColor(theme.colors, variant)};
          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
        `
      : styleType === "outline"
      ? css`
          background-color: transparent;
          color: ${({ theme }) => parseThemeColor(theme.colors, variant)};
          border: 1px solid
            ${({ theme }) => parseThemeColor(theme.colors, variant)};
          box-shadow: none;
        `
      : css`
          background-color: transparent;
          color: ${({ theme }) => parseThemeColor(theme.colors, variant)};
          border: 1px solid transparent;
          box-shadow: none;
        `}
`;
