import styled from "styled-components";
import { themeBreakpoints } from "../../../theme/breakpoints";

export const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 46px;
  a {
    text-decoration: none;
  }
`;
export const StyledHeroImage = styled.img`
  width: 120px;
  height: 120px;
  @media (min-width: ${themeBreakpoints.tablet}) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: ${themeBreakpoints.desktopsm}) {
    width: 350px;
    height: 350px;
  }
`;
export const StyledHeroTitle = styled.h5`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  margin: 16px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.black.default};

  @media (min-width: ${themeBreakpoints.tablet}) {
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    margin: 54px 0;
  }
  @media (min-width: ${themeBreakpoints.desktopsm}) {
    font-size: 64px;
    font-weight: 300;
    line-height: 92px;
    width: 750px;
  }
`;
