import {
  StyledCardIconContainer,
  StyledCardIconIcon,
  StyledCardIconText,
} from "./index.styles";

export interface ICardIcon {
  text?: string;
  icon?: string;
}

export const CardIcon = ({
  text = "Perros",
  icon = "/assets/icons/dog-icon.svg",
}: ICardIcon) => {
  return (
    <StyledCardIconContainer>
      <StyledCardIconIcon src={icon} />
      <StyledCardIconText>{text}</StyledCardIconText>
    </StyledCardIconContainer>
  );
};
