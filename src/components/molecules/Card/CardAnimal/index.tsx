import { useNavigate } from "react-router";
import { IAnimalCard } from "../../../../types/cards";
import {
  AnimalImage,
  Description,
  MainCardContainer,
  StyledLink,
  Title,
} from "./index.styles";

export const CardAnimal = ({
  imgSrc,
  title,
  mainDescription,
  altDescription,
  url,
}: IAnimalCard) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pet-detail/${url}`)
  }

  return (
    <StyledLink to={`/pet-detail/${url}`}>
      <MainCardContainer>
        <AnimalImage src={imgSrc} alt="An animal" />
        <Title>{title}</Title>
        <Description>{mainDescription}</Description>
        {altDescription && <Description>{altDescription}</Description>}
      </MainCardContainer>
    </StyledLink>
  );
};
