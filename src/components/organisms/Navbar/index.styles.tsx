import { Link } from "react-router-dom";
import styled from "styled-components";
import { themeBreakpoints } from "../../../theme/breakpoints";

export const StyledNav = styled.nav`
  width: 100%;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin-bottom: 0px;
    background: ${({ theme }) => theme.colors.secondary.default};
    padding: 12px 16px;
    justify-content: space-between;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    background: ${({ theme }) => theme.colors.secondary.default};
    padding: 8px 60px;
  }
`;

export const StyledHamburguerButton = styled.button`
  position: absolute;
  left: 16px;
  width: 42px;
  height: 42px;
  background: transparent;
  cursor: pointer;
  @media (min-width: ${themeBreakpoints.tablet}) {
    display: none;
  }
`;

export const StyledHamburguerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  width: 80px;
  height: 80px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    width: 36px;
    height: 36px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledLogoimage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
