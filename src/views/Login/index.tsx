import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Grid,
  FormControl,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Box,
  Link
} from '@mui/material'
import { useState } from 'react'
import Navbar from '../../components/organisms/Navbar'

export const Login = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <>
      <Navbar />
      <Box
        sx={(theme) => ({
          marginTop: '150px',
          [theme.breakpoints.up('sm')]: {
            background: '#EFEFD0',
            maxWidth: '407px',
            margin: '64px auto 0'
          },
          padding: '32px 16px 68px',
          borderRadius: '15px'
        })}
      >
        <form onSubmit={handleSubmit}>
          <Grid container rowSpacing={4}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField id='name' label='Nombre completo' variant='outlined' required />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl variant='outlined' fullWidth>
                <InputLabel htmlFor='password'>Contraseña</InputLabel>
                <OutlinedInput
                  type={showPassword ? 'text' : 'password'}
                  required
                  id='password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        edge='end'
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Contraseña'
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ '& button': { width: '100%' } }}>
                <Button variant='contained' type='submit'>
                  INICIAR SESIÓN
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' textAlign='center'>
                ¿No tienes una cuenta? <Link href='/sign-in'>CREA UNA</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  )
}
