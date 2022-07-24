import React from 'react'
import Button from '../../atoms/Button'
import {
  StyledHamburguerButton,
  StyledHamburguerImage,
  StyledLink,
  StyledLogoimage,
  StyledNav
} from './index.styles'

export interface INavbar {
  showAuthenticationButton?: boolean
}

const Navbar = ({ showAuthenticationButton = false }: INavbar): JSX.Element => {
  return (
    <StyledNav>
      <HamburguerMenu />
      <StyledLink to='/' aria-label='Home'>
        <StyledLogoimage src='/assets/images/logo.svg' alt='Lepetinski Logo' />
      </StyledLink>
      {showAuthenticationButton ? <Button size='large'>INICIAR SESIÓN</Button> : null}
    </StyledNav>
  )
}

export const HamburguerMenu = () => {
  return (
    <StyledHamburguerButton aria-label='Menu' name='menu'>
      <StyledHamburguerImage src='/assets/icons/hamburguer.svg' alt='Menu' />
    </StyledHamburguerButton>
  )
}

export default Navbar
