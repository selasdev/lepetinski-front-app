import Navbar from '../../components/organisms/Navbar'
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
import Box from '@mui/material/Box'
import { VisibilityOff } from '@mui/icons-material'

export const SignInView = () => {
  const [value, setValue] = useState<Date | null>(null)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false)

  const handleSubmit = (event: any) => {
    event.preventDefault()
  }
  return (
    <>
      <Navbar />
      <Box
        sx={(theme) => ({
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
              <FormControl fullWidth>
                <TextField id='email' label='Correo' variant='outlined' required />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue)
                    }}
                    label='Fecha de nacimiento'
                    renderInput={(params: any) => <TextField {...params} required />}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant='outlined' fullWidth>
                <InputLabel htmlFor='password'>Contraseña</InputLabel>
                <OutlinedInput
                  required
                  type={showPassword ? 'text' : 'password'}
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
              <FormControl variant='outlined' fullWidth>
                <InputLabel htmlFor='passwordConfirm '>Repite contraseña</InputLabel>
                <OutlinedInput
                  required
                  type={showPasswordConfirm ? 'text' : 'password'}
                  id='passwordConfirm'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        edge='end'
                        onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                      >
                        {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Repite contraseña'
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ '& button': { width: '100%' } }}>
                <Button variant='contained' type='submit'>
                  CREAR CUENTA
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' textAlign='center'>
                ¿Ya tienes una cuenta? <Link href='/login'>INICIA SESION</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  )
}
