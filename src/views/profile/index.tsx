import { Box, Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardPet } from "../../components/molecules/Card/CardPet";
import Navbar from "../../components/organisms/Navbar";
import { useAuthenticationProvider } from "../../contexts/Auth/context";

export const ProfileView = () => {
  const { user } = useAuthenticationProvider();

  const [adopciones, setAdopciones] = useState<Array<any>>([])
  const [posts, setPosts] = useState<Array<any>>([])
  const [loader, setLoader] = useState<Boolean>(false)

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.get(`https://t00e9m.deta.dev/usuario/${user?.id}/adopciones`, config)
      .then(function (response:any) {
        setAdopciones( () => [...response.data] )
        axios.get(`https://t00e9m.deta.dev/usuario/${user?.id}/posts`, config)
        .then(function (response:any) {
          setPosts( () => [...response.data] )
          setLoader(true)
        })
        .catch(function (error:any) {
          console.log(error)
        })
      })
      .catch(function (error:any) {
        console.log(error)
      })    
      
  },[user?.id])

  return (
    <>
      <Navbar />
      <Box
        sx={(theme) => ({
          padding: "16px 16px 0",
          [theme.breakpoints.up("sm")]: {
            padding: "16px 55px 0",
            marginBottom: "30px",
          },
          [theme.breakpoints.up("lg")]: {
            padding: "30px 70px 0",
            marginBottom: "60px",
          },
        })}
      >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h4"
              fontSize="24px"
              marginTop="40px"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.primary.main,
              })}
            >
              Mi perfil
            </Typography>
            <Card
              sx={() => ({
                marginTop: "23px",
                maxWidth: "500px",
              })}
            >
              <CardContent>
                <Typography variant="body1" fontSize="16px" fontWeight={400}>
                  {user?.name}
                </Typography>
                <Typography variant="body1" fontSize="16px" fontWeight={400}>
                  {user?.email}
                </Typography>
                <Typography variant="body1" fontSize="16px" fontWeight={400}>
                  {user?.address}
                </Typography>
                <Typography variant="body1" fontSize="16px" fontWeight={400}>
                  {user?.age}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h4"
              fontSize="24px"
              marginTop="25px"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.primary.main,
              })}
            >
              Mascotas que vas a adoptar
            </Typography>
            <Grid container spacing={2} marginTop="23px">
              {loader
                  ? adopciones.map((adop) => (
                    <Grid item xs={12} sm={6} md={4} lg={6} key={adop.id}>
                      <CardPet id={adop.id} idpost={adop.post.id} img={adop.post.mascota.foto_url} name={adop.post.mascota.nombre} features={[adop.post.mascota.info_salud, adop.post.mascota.edad, 'macho']} address={adop.post.usuario.ciudad} origin='0' saved={true} />
                    </Grid>
                  ))
                  : <Skeleton variant="rectangular" sx={{  width: '100%', height: '40vh', borderRadius: '10px' }}/>
              }
            </Grid>
            <Typography
              variant="h4"
              fontSize="24px"
              marginTop="25px"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.primary.main,
              })}
            >
              Publicaciones
            </Typography>
            <Grid container spacing={2} marginTop="23px">
              {loader
                ? posts.map((posts) => (
                  <Grid item xs={12} sm={6} md={4} lg={6} key={posts.id}>
                    <CardPet id={posts.usuario.id} idpost={posts.id} img={posts.mascota.foto_url} name={posts.mascota.nombre} features={[posts.mascota.info_salud, posts.mascota.edad, 'macho']} address={posts.usuario.ciudad} origin='3' saved={true} />
                  </Grid>
                ))
                : <Skeleton variant="rectangular" sx={{  width: '100%', height: '40vh', borderRadius: '10px' }}/>
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
