import styled from "styled-components";
import { themeBreakpoints } from "../../theme/breakpoints";

export const MainStartContainer = styled.div`
  margin: 28px 24px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin: 28px 36px;
  }
  @media (min-width: ${themeBreakpoints.desktopsm}) {
    margin: 28px 48px;
  }
`;
