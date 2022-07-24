import { CardIcon } from '../../molecules/Card/CardIcon/index'
import { CategoriesData } from './data'
import { StyledCategoriesContainer, StyledCategoriesTitle } from './index.styles'
export const Categories = () => {
  return (
    <>
      <StyledCategoriesTitle>Categoría populares</StyledCategoriesTitle>
      <StyledCategoriesContainer>
        {CategoriesData.map(({ icon, text }) => (
          <CardIcon icon={icon} text={text} />
        ))}
      </StyledCategoriesContainer>
    </>
  )
}
