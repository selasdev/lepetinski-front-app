import styled from "styled-components";
import { themeBreakpoints } from "../../theme/breakpoints";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    padding: 0px 48px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    padding: 0px 64px;
  }
  align-items: center;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: flex-start;

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin-top: 16px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    margin: 24px;
  }
`;

export const FormBox = styled.div`
  margin-top: 0px;
  padding: 16px 0px;
  box-sizing: border-box;
  width: 100%;
  max-width: 560px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin-top: 32px;
    padding: 24px 64px;
    margin-bottom: 86px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.secondary.white};
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    padding: 24px 72px;
    margin-bottom: 124px;
    max-width: 800px;
  }
  h1 {
    margin-bottom: 32px;

    @media (min-width: ${themeBreakpoints.tablet}) {
      text-align: center;
    }
  }
  div button {
    margin-top: 16px;
    padding: 12px;
    @media (min-width: ${themeBreakpoints.tablet}) {
      padding: 16px;
      margin-top: 32px;
    }
  }
`;

export const PetImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 220px;
  border-radius: 16px;
  margin-top: 16px;
  cursor: pointer;

  @media (min-width: ${themeBreakpoints.tablet}) {
    height: 320px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    height: 450px;
  }
`;
