import { ThemeProvider as CustomThemeProvider } from 'styled-components'
import { AuthenticationProvider } from './contexts/Auth/context'
import Routes from './routes'
import { theme as customTheme } from './theme'
import { GlobalStyles } from './theme/global'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/materialTheme'
const DEFAULT_AUTH_STATUS = {
  authenticated: false,
  user: null
}

const App = () => {
  return (
    <AuthenticationProvider values={DEFAULT_AUTH_STATUS}>
      <CustomThemeProvider theme={customTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </CustomThemeProvider>
    </AuthenticationProvider>
  )
}

export default App
