import { createTheme } from '@mui/material/styles'
import { palette } from './materialPalette'
import { components } from './components'
import { materialBreakpoints as breakpoints } from './breakpoints'


export const theme = createTheme({
  ...palette,
  ...components,
  ...breakpoints
})
