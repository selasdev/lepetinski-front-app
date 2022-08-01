import styled from "styled-components";
import { themeBreakpoints } from "../../theme/breakpoints";

export const MainHeader = styled.h1`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.46px;
  color: ${({ theme }) => theme.colors.primary.default};
  margin-bottom: 16px;
  font-weight: 400;

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin-bottom: 32px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    font-size: 64px;
    line-height: 80px;
  }
`;

export const SecondaryHeader = styled.h2`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.46px;
  color: ${({ theme }) => theme.colors.secondary.default};
  margin-bottom: 24px;
  font-weight: 400;

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin-bottom: 64px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    font-size: 48px;
    line-height: 50px;
  }
`;

export const FinalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px 0px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin: 48px 0px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    margin: 64px 0px;
  }
`;
