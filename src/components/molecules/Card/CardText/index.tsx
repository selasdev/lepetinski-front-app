import { Link as OriginalLink } from "../../../atoms/Link";
import styled from "styled-components";
import { StyledCardTextContainer, StyledCardTextText } from "./index.styles";

export interface ICardText {
  text?: string;
  link?: string;
}

const Link = styled(OriginalLink)`
  text-decoration: none;
`;

export const CardText = ({
  text = "Perros",
  link = "/start/dogs/none",
}: ICardText) => {
  return (
    <Link href={link}>
      <StyledCardTextContainer>
        <StyledCardTextText>{text}</StyledCardTextText>
      </StyledCardTextContainer>
    </Link>
  );
};
