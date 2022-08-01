import styled from "styled-components";
import { themeBreakpoints } from "../../../theme/breakpoints";

export const StyledCategoriesTitle = styled.h6`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  margin: 34px 0 22px 16px;
  color: ${({ theme }) => theme.colors.black.default};

  @media (min-width: ${themeBreakpoints.tablet}) {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 48px;
    margin: 64px 0 20px 60px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    font-family: Roboto;
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    margin: 60px 0 30px 60px;
  }
`;

export const StyledCategoriesContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  gap: 24px 30px;
  justify-content: center;
  align-items: center;
  margin: 0px 32px 32px;
  grid-template-columns: 1fr 1fr;
  * {
    text-decoration: none;
  }

  @media (min-width: ${themeBreakpoints.tablet}) {
    gap: 20px;
    margin-bottom: 48px;
  }
  @media (min-width: ${themeBreakpoints.desktopsm}) {
    gap: 60px;
    margin-bottom: 86px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
