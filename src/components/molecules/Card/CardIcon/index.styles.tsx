import styled from 'styled-components'
import { themeBreakpoints } from '../../../../theme/breakpoints'

export const StyledCardIconIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 12px;
  @media (min-width: ${themeBreakpoints.tablet}) {
    width: 40px;
    height: 40px;
    margin: 0 24px;
  }
  @media (min-width: ${themeBreakpoints.desktopmd}) {
    width: 100px;
    height: 100px;
    margin-bottom: 32px;
  }
`

export const StyledCardIconText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  @media (min-width: ${themeBreakpoints.tablet}) {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
  }
  @media (min-width: ${themeBreakpoints.desktopmd}) {
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    text-align: center;
  }
`

export const StyledCardIconContainer = styled.div`
  display: flex;
  width: 150px;
  height: 85px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 1px black;
  border-radius: 16px;
  @media (min-width: ${themeBreakpoints.tablet}) {
    width: 350px;
    height: 85px;
    justify-content: flex-start;
  }
  @media (min-width: ${themeBreakpoints.desktopmd}) {
    flex-direction: column;
    width: 400px;
    height: 400px;
  }
`
