import styled from "styled-components";
import { themeBreakpoints } from "../../../theme/breakpoints";

export const StyledBannerImage = styled.img<{ showAlways: boolean }>`
  width: 100%;
  object-fit: cover;
  height: 100%;
  visibility: ${({ showAlways }) => (showAlways ? "visible" : "hidden")};

  @media (min-width: ${themeBreakpoints.tablet}) {
    visibility: visible;
  }
`;

export const StyledBannerContainer = styled.div`
  width: 100%;
  height: 178px;
  position: relative;
  @media (min-width: ${themeBreakpoints.tablet}) {
    height: 426px;
  }
  @media (min-width: ${themeBreakpoints.desktopsm}) {
    height: 529px;
  }
`;

export const StyledBannerContentContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

export const StyledOverlay = styled.div<{ showAlways: boolean }>`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: ${({ showAlways }) => (showAlways ? "block" : "none")};

  @media (min-width: ${themeBreakpoints.tablet}) {
    display: block;
  }
`;
export const StyledBannerTitle = styled.h5`
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  margin: 0 35px 20px;
  color: ${({ theme }) => theme.colors.secondary.white};
  @media (min-width: ${themeBreakpoints.tablet}) {
    font-size: 64px;
    font-weight: 300;
    line-height: 92px;
    margin: 0 50px 28px;
    width: 660px;
  }
  @media (min-width: ${themeBreakpoints.desktopmd}) {
    font-size: 96px;
    line-height: 144px;
    margin: 48px 60px 64px;
    width: 100%;
  }
`;

export const StyledExpandedBannerTitle = styled.h5`
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: 0.46px;
  text-align: left;
  padding: 0 16px 32px;
  color: ${({ theme }) => theme.colors.secondary.default};
  & span {
    color: ${({ theme }) => theme.colors.primary.default};
  }

  @media (min-width: ${themeBreakpoints.tablet}) {
    text-align: center;
    font-size: 64px;
    line-height: 92px;
    padding: 0 50px 24px;
  }
  @media (min-width: ${themeBreakpoints.desktopmd}) {
    font-size: 96px;
    line-height: 144px;
    padding: 0px 60px 48px;
  }
`;

export const StyledMultipleButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  width: 100%;

  & a {
    width: 100%;
    padding: 12px 16px;
  }

  a:nth-child(1) {
    margin-bottom: 8px;
  }

  @media (min-width: ${themeBreakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-around;

    & a {
      width: fit-content;
      padding: 12px 16px;
    }

    a:nth-child(1) {
      margin-bottom: 0px;
    }
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    flex-direction: row;
    justify-content: center;

    & a {
      width: fit-content;
      padding: 20px 32px;
    }

    a:nth-child(1) {
      margin-right: 32px;
    }
  }
`;
