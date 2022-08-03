import styled from 'styled-components'
import { themeBreakpoints } from '../../theme/breakpoints'

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 16px;
  margin: 35px 0;
  max-height: 506px;
  @media (min-width: ${themeBreakpoints.desktopmd}) {
    margin: 0;
  }
`
