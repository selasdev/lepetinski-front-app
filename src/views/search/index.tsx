/* eslint-disable */
import Navbar from '../../components/organisms/Navbar'
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useParams } from 'react-router'
import { CardPet } from '../../components/molecules/Card/CardPet'
import SearchIcon from '@mui/icons-material/Search'
import { FiltersView } from './filters/index'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const SearchView = (): JSX.Element => {
  const { category, race, size, age } = useParams()
  const theme = useTheme()
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'))
  const [openFilters, setOpenFilters] = useState<boolean>(false)
  const [loader, setLoader] = useState<Boolean>(false)
  const [mascotas,setMascotas] = useState<Array<any>>([])
  const [posts, setPosts] = useState<Array<any>>([])
  const [tagcategory, setTagcategory] = useState<string>('')
  const [tagsize, setTagsize] = useState<string>('')

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 

    switch (category) {
      case '1':
        setTagcategory('Perro')
        break;
    
      case '2':
        setTagcategory('Gato')
        break;
      case '3':
        setTagcategory('Ave')
        break;
      case '4':
        setTagcategory('Hamster')
        break;        
    }

    switch (size) {
      case '1':
        setTagsize('Sin tamaño')
        break;
    
      case '2':
        setTagsize('Pequeño')
        break;
      case '3':
        setTagsize('Mediano')
        break;
      case '4':
        setTagsize('Grande')
        break;        
    }

    axios.get('https://t00e9m.deta.dev/posts', config)
      .then(function (response:any) {
        setMascotas( () => [...response.data] )
        setLoader(true)
      })
      .catch(function (error:any) {
        console.log(error)
      })
  },[])

  useEffect(() => {
    setPosts([])
    if(mascotas.length > 0){
      mascotas.map((post:any) => {
        //Tipo
        if((post.mascota.tipo_id === parseInt(category!, 10)) ){
            //Raza
            if((parseInt(race!, 10) === 1)){
              //tama;o
              if((parseInt(size!, 10) === 1)){
                if((post.mascota.edad <= parseInt(age!, 10))){
                  setPosts( (data) => [...data, post] )
                  
                }
              }else{
                if((parseInt(size!, 10) === 2)){
                  if(post.mascota.medida <= 20){
                    if((post.mascota.edad <= parseInt(age!, 10))){
                      setPosts( (data) => [...data, post] )
                      
                    }
                  }
                }
                else if ((parseInt(size!, 10) === 3)){
                  if((20 < post.mascota.medida) && (post.mascota.medida <= 45)){
                    if((post.mascota.edad <= parseInt(age!, 10))){
                      setPosts( (data) => [...data, post] )
                      
                    }
                  }
                }
                else if ((parseInt(size!, 10) === 4)){
                  if(post.mascota.medida > 45){
                      if((post.mascota.edad <= parseInt(age!, 10))){
                        setPosts( (data) => [...data, post] )
                        
                      }
                    }
                }
              }
            }else{
              if((post.raza.id === parseInt(race!, 10))){
                if((parseInt(size!, 10) === 1)){
                  if((post.mascota.edad <= parseInt(age!, 10))){
                    setPosts( (data) => [...data, post] )
                    
                  }
                }else{
                  if((parseInt(size!, 10) === 2)){
                    if(post.mascota.medida <= 20){
                      if((post.mascota.edad <= parseInt(age!, 10))){
                        setPosts( (data) => [...data, post] )
                        
                      }
                    }
                  }
                  else if ((parseInt(size!, 10) === 3)){
                    if((20 < post.mascota.medida) && (post.mascota.medida <= 45)){
                      if((post.mascota.edad <= parseInt(age!, 10))){
                        setPosts( (data) => [...data, post] )
                        
                      }
                    }
                  }
                  else if ((parseInt(size!, 10) === 4)){
                    if(post.mascota.medida > 45){
                        if((post.mascota.edad <= parseInt(age!, 10))){
                          setPosts( (data) => [...data, post] )
                          
                        }
                      }
                  }
                }
              }
            }
        }
      })
      
    }
  }, [mascotas])

  return (
    <>
      <Navbar />
      <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
        <Link href='-1' underline='none'>
          {' '}
          VOLVER
        </Link>
        {matchesSm && (
          <Box marginTop='30px'>
            <FormControl fullWidth>
              <InputLabel htmlFor='outlined-adornment-amount'>Buscar</InputLabel>
              <OutlinedInput
                id='outlined-adornment-amount'
                endAdornment={
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                }
                label='Amount'
              />
            </FormControl>
            <Stack marginTop='16px' direction='row' spacing={1}>
              <Chip label={tagcategory} />
              <Chip label={tagsize} />
              <Chip label={age + ' Años'} />
            </Stack>
          </Box>
        )}
        {!matchesSm && (
          <Stack direction='row' justifyContent='space-between' marginTop='36px'>
            <Typography variant='h4' fontSize='24px' fontWeight='bold'>
              {category}
            </Typography>
            <Button color='secondary' variant='contained' onClick={() => setOpenFilters(true)}>
              FILTROS
            </Button>
          </Stack>
        )}

        <Grid container spacing={4} marginTop={{ xs: '20px', sm: '40px' }}>
          {loader
            ? posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                <CardPet id={post.id} idpost={post.id} img={post.mascota.foto_url} name={post.mascota.nombre} features={[post.mascota.info_salud, post.mascota.edad, (post.mascota.genero === 0 ? 'Macho' : 'Hembra')]} address={post.usuario.ciudad} origin='1' />
              </Grid>
             ))
            : <Skeleton variant="rectangular" sx={{  width: '100%', height: '40vh', borderRadius: '10px' }}/>
          }
        </Grid>
        <FiltersView open={openFilters} id='1' handleClose={() => setOpenFilters(false)} />
      </Box>
    </>
  )
}
