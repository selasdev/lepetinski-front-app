import styled from 'styled-components'
import { themeBreakpoints } from '../../../theme/breakpoints'

export const StyledCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 30px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${themeBreakpoints.tablet}) {
    gap: 20px;
  }
  @media (min-width: ${themeBreakpoints.desktopmd}) {
    gap: 60px;
  }
`

export const StyledCategoriesTitle = styled.h6`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  margin: 34px 0 22px 16px;
  @media (min-width: ${themeBreakpoints.tablet}) {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 48px;
    margin: 64px 0 20px 60px;
  }

  @media (min-width: ${themeBreakpoints.desktopmd}) {
    font-family: Roboto;
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    margin: 60px 0 30px 60px;
  }
`
