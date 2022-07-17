import React from "react";
import {
  StyledHamburguerButton,
  StyledHamburguerImage,
  StyledLink,
  StyledLogoimage,
  StyledNav,
} from "./index.styles";

const Navbar = () => {
  return (
    <StyledNav>
      <HamburguerMenu />
      <StyledLink to="/" aria-label="Home">
        <StyledLogoimage src="/assets/images/logo.svg" alt="Lepetinski Logo" />
      </StyledLink>
    </StyledNav>
  );
};

export const HamburguerMenu = () => {
  return (
    <StyledHamburguerButton aria-label="Menu" name="menu">
      <StyledHamburguerImage src="/assets/icons/hamburguer.svg" alt="Menu" />
    </StyledHamburguerButton>
  );
};

export default Navbar;
