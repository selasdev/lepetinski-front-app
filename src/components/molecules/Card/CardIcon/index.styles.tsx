import styled from "styled-components";
import { themeBreakpoints } from "../../../../theme/breakpoints";

export const StyledCardIconIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 12px;
  @media (min-width: ${themeBreakpoints.tablet}) {
    width: 40px;
    height: 40px;
    margin: 0 24px;
  }
  @media (min-width: ${themeBreakpoints.desktopsm}) {
    width: 100px;
    height: 100px;
    margin-bottom: 32px;
  }
`;

export const StyledCardIconText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black.default};

  @media (min-width: ${themeBreakpoints.tablet}) {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
  }
  @media (min-width: ${themeBreakpoints.desktopsm}) {
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    text-align: center;
  }
`;

export const StyledCardIconContainer = styled.article`
  display: flex;
  min-width: 150px;
  height: 85px;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.25);
  filter: drop-shadow(0px 0px 1px rgba(12, 26, 75, 0.24));
  border-radius: 16px;
  padding: 24px 24px 29px;
  background: #ffffff;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.default};
  }

  @media (min-width: ${themeBreakpoints.tablet}) {
    width: 100%;
    height: 85px;
    justify-content: flex-start;
    padding: 22px 24px;
  }
  @media (min-width: ${themeBreakpoints.desktopsm}) {
    flex-direction: column;
    height: 400px;
    padding: 32px;
  }
`;
