import { Link as OriginalLink } from "../../../atoms/Link";
import styled from "styled-components";
import {
  StyledCardIconContainer,
  StyledCardIconIcon,
  StyledCardIconText,
} from "./index.styles";

export interface ICardIcon {
  text?: string;
  icon?: string;
  link?: string;
}

const Link = styled(OriginalLink)`
  text-decoration: none;
`;

export const CardIcon = ({
  text = "Perros",
  icon = "/assets/icons/dog-icon.svg",
  link = "/search?category=dog",
}: ICardIcon) => {
  return (
    <Link href={link}>
      <StyledCardIconContainer>
        <StyledCardIconIcon src={icon} />
        <StyledCardIconText>{text}</StyledCardIconText>
      </StyledCardIconContainer>
    </Link>
  );
};
