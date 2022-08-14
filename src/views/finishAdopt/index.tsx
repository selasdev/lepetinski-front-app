import { Box, Button, Stack, Typography, Card, CardContent, Grid, Link, Skeleton } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../../components/organisms/Navbar'
import { StyledImage } from '../petDetail/index.styles'

export const FinishAdoptView = () => {
  const { id } = useParams();

  const [post, setPost] = useState({
    descripcion: '',
    id: 0,
    celular_contacto: '',
    mascota: {
      foto_url: '',
      nombre: '',
      edad: 0,
      info_salud: ''
    },
    usuario: {
      nombre: '',
      ciudad: '',
      email: ''
    }
  })
  const [loader, setLoader] = useState<Boolean>(false)

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.get('https://t00e9m.deta.dev/post/'+id, config)
      .then(function (response:any) {
        setPost(response.data)
        setLoader(true)
      })
      .catch(function (error:any) {
        console.log(error)
      })
      
  }, [id])

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
        {loader
          ?  <Grid container direction={{ sm: 'row', lg: 'row' }} spacing={4} marginTop='14px'>
            <Grid item sm={12} lg={6}>
              <StyledImage src={post.mascota.foto_url} alt='pet' style={{ margin: 0 }} />
            </Grid>
            <Grid item sm={12} lg={6}>
              <Typography
                variant='h4'
                color='text.secondary'
                marginBottom='24px'
                fontWeight={700}
                fontSize='24px'
              >
                ¡Empiezas la adopción de {post.mascota.nombre}!
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
                    {post.usuario.nombre}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {post.celular_contacto}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {post.usuario.ciudad}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {post.usuario.email}
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
                  href='/'
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
          : <Skeleton variant="rectangular" sx={{  width: '100%', height: '70vh', borderRadius: '10px' }}/>
        }
      </Box>
    </>
  )
}
