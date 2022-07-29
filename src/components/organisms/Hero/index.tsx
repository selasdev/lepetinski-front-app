import { Button } from '@mui/material'
import { StyledHeroImage, StyledHeroTitle, StyledHeroContainer } from './index.styles'

export const Hero = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroImage src='/assets/images/hero.svg' alt='hero' />
      <StyledHeroTitle>Crea una cuenta y mejora tu experiencia</StyledHeroTitle>
      <Button variant='contained' href='/signIn'>
        CREAR CUENTA
      </Button>
    </StyledHeroContainer>
  )
}
