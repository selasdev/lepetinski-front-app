import { createTheme } from '@mui/material/styles'
import { palette } from './materialPalette'
import { components } from './components'

export const theme = createTheme({
  ...palette,
  ...components
})
