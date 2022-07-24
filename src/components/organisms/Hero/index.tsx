import { StyledHeroImage, StyledHeroTitle, StyledHeroContainer } from './index.styles'
import Button from '../../atoms/Button'

export const Hero = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroImage src='/assets/images/hero.svg' alt='hero' />
      <StyledHeroTitle>Crea una cuenta y mejora tu experiencia</StyledHeroTitle>
      <Button>CREAR CUENTA</Button>
    </StyledHeroContainer>
  )
}
