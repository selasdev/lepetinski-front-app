import styled from 'styled-components'
import { themeBreakpoints } from '../../../theme/breakpoints'

export const StyledBannerImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`

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
`

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
`

export const StyledOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`
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
`
