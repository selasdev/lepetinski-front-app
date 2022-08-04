import styled from "styled-components";
import { themeBreakpoints } from "../../../theme/breakpoints";

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 48px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin-top: 32px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    margin-top: 64px;
  }
`;

export const MainTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: 0.46px;
  color: ${({ theme }) => theme.colors.secondary.default};
  margin: 0px 0px 12px;
  padding: 0px 16px;

  & span {
    color: ${({ theme }) => theme.colors.primary.default};
  }

  @media (min-width: ${themeBreakpoints.tablet}) {
    font-size: 32px;
    margin: 0px 0px 24px;
    padding: 0px 32px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    font-size: 48px;
    line-height: 54px;
    margin: 0px 0px 32px;
    padding: 0px 64px;
  }
`;
