import { Box, Button, Stack, Typography, Card, CardContent, Grid, Link } from '@mui/material'
import Navbar from '../../components/organisms/Navbar'
import { mockData } from '../petDetail/data'
import { StyledImage } from '../petDetail/index.styles'

export const FinishAdoptView = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={(theme) => ({
          padding: '16px 16px 0',
          [theme.breakpoints.up('sm')]: {
            padding: '16px 55px 0'
          },
          [theme.breakpoints.up('lg')]: {
            padding: '30px 70px 0'
          }
        })}
      >
        <Link href='/pet-detail' underline='none'>
          VOLVER
        </Link>
        <Grid container direction={{ sm: 'row', lg: 'row' }} spacing={4} marginTop='14px'>
          <Grid item sm={12} lg={6}>
            <StyledImage src={mockData.petImage} alt='pet' style={{ margin: 0 }} />
          </Grid>
          <Grid item sm={12} lg={6}>
            <Typography
              variant='h4'
              color='text.secondary'
              marginBottom='24px'
              fontWeight={700}
              fontSize='24px'
            >
              ¡Empiezas la adopción de {mockData.petName}!
            </Typography>
            <Typography variant='body2' color='text.secondary' marginBottom='24px'>
              Felicitaciones por la adopción de tu perro. Estamos felices por ti. Encontraste el
              cachorro perfecto que traerá alegría y diversión a tu vida. Mientras lo ves jugar,
              acurrúcarse a tu lado por la noche y duerme profundamente en tu cama... recuerda lo
              afortunado que eres de llamarlo parte de tu familia.{' '}
            </Typography>
            <Typography
              variant='h6'
              color='text.secondary'
              fontWeight='bold'
              fontSize='20px'
              marginBottom='10px'
            >
              Información de contacto{' '}
            </Typography>
            <Card
              sx={() => ({
                borderRadius: '15px'
              })}
            >
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  {mockData.owner}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {mockData.phoneNumber}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {mockData.address}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {mockData.email}
                </Typography>
              </CardContent>
            </Card>

            <Stack
              marginTop='24px'
              direction={{ sm: 'column', md: 'row' }}
              spacing={2}
              justifyContent={{ md: 'center' }}
            >
              <Button variant='contained' href='/profile'>
                IR A MI PERFIL
              </Button>
              <Button
                variant='contained'
                color='secondary'
                sx={(theme) => ({
                  marginTop: '24px',
                  [theme.breakpoints.up('sm')]: {
                    marginTop: '0px'
                  }
                })}
              >
                IR AL DASHBOARD{' '}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
