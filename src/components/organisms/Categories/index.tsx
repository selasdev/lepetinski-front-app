import {
  StyledCategoriesContainer,
  StyledCategoriesTitle,
} from "./index.styles";
import { CardIcon, ICardIcon } from "../../molecules/Card/CardIcon/index";
import { CategoriesData } from "./__mocks__/data";

export interface ICategories {
  categories?: ICardIcon[];
}

export const Categories = ({
  categories = CategoriesData,
}: ICategories): JSX.Element => {
  return (
    <>
      <StyledCategoriesTitle>Categoría populares</StyledCategoriesTitle>
      <StyledCategoriesContainer>
        {categories.map(({ icon, text }) => (
          <CardIcon icon={icon} text={text} />
        ))}
      </StyledCategoriesContainer>
    </>
  );
};
