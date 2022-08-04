import { IAnimalCard } from "../../../../types/cards";

export const CardAnimal = ({
  imgSrc,
  title,
  mainDescription,
  altDescription,
  url,
}: IAnimalCard) => {
  return <div>{title}</div>;
};
