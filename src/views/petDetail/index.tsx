import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  Grid,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import Navbar from '../../components/organisms/Navbar'
import { mockData } from './data'
import { StyledImage } from './index.styles'
import { RenderTree } from './types'
import TreeItem from '@mui/lab/TreeItem'
import { TreeView } from '@mui/lab'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { useAuthenticationProvider } from '../../contexts/Auth/context'

export const PetDetailView = () => {
  const petFilters =
    // eslint-disable-next-line no-useless-concat
    mockData.petAge + ' años' + ' - ' + mockData.petGender + ' - ' + mockData.petRace
    
  const { id } = useParams();
  const { authenticated, user } = useAuthenticationProvider()
  const navigate = useNavigate()

  const theme = useTheme()
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'))

  const [questions, setQuestions] = useState<Array<RenderTree>>([])

  const [question, setQuestion] = useState('')

  const handleChangeQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value)
  }

  const handleClick = () => {
    setQuestions((prevState) => [
      ...prevState,
      {
        id: '',
        name: `${question} ${new Date().toLocaleDateString()}`,
        children: []
      }
    ])
    setQuestion('')
  }

  const [post, setPost] = useState({
    descripcion: '',
    id: 0,
    mascota: {
      foto_url: '',
      nombre: '',
      edad: 0,
      info_salud: ''
    },
    usuario: {
      nombre: '',
      ciudad: ''
    }
  })

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
      })
      .catch(function (error:any) {
        console.log(error)
      })
      
  }, [])

  // useEffect(() => {
  //   console.log(post)
  // }, [post])
  
  const handleAdopt = () => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    }
    
    const data = {
      post_id: post.id,
      adoptador_id: user?.id
    }
    
    axios.post('https://t00e9m.deta.dev/adoptar', data, config)
      .then(function (response:any) {
        console.log(response)
        navigate(`/finish-adopt/${post.id}`)
      })
      .catch(function (error:any) {
        console.log(error)
      })
  } 

  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  )
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
        <Link href='/' underline='none'>
          VOLVER
        </Link>
        <Grid
          direction={{ xs: 'column', lg: 'row' }}
          container
          columnSpacing={5}
          sx={(theme) => ({
            [theme.breakpoints.up('sm')]: {
              marginTop: '30px'
            }
          })}
        >
          <Grid item lg={6} xs={12}>
            <StyledImage src={post.mascota.foto_url} alt='pet' />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box
              sx={(theme) => ({
                [theme.breakpoints.up('sm')]: {
                  display: 'flex',
                  justifyContent: 'space-between'
                }
              })}
            >
              {matchesSm && (
                <Stack spacing={2}>
                  <Typography variant='h4' fontSize='30px' fontWeight='bold'>
                    {post.mascota.nombre}
                  </Typography>

                  <Stack spacing={1} direction='row'>
                  <Chip label={post.mascota.edad + ' años'} color='secondary' />
                    {/* {mockData.filters.map((filter) => (
                      <Chip label={filter} color='secondary' />
                    ))} */}
                  </Stack>
                </Stack>
              )}

              <Stack spacing={2}>
                <Button
                  onClick={handleAdopt}
                  variant='contained'
                  sx={(theme) => ({
                    width: '100%',
                    [theme.breakpoints.up('sm')]: {
                      width: 'fit-content'
                    }
                  })}
                >
                  ADOPTAR
                </Button>

                {matchesSm && (
                  <Button
                    color='info'
                    variant='contained'
                    sx={(theme) => ({
                      [theme.breakpoints.up('sm')]: {
                        width: 'fit-content'
                      }
                    })}
                  >
                    GUARDAR
                  </Button>
                )}
              </Stack>
            </Box>
            {matchesSm && (
              <Typography
                variant='body1'
                fontSize='16px'
                marginTop='36px'
                sx={(theme) => ({
                  [theme.breakpoints.up('sm')]: {
                    fontWeight: '600'
                  }
                })}
              >
                {post.usuario.nombre} - {post.usuario.ciudad}
              </Typography>
            )}
            {!matchesSm && (
              <Card
                sx={() => ({
                  marginTop: '23px'
                })}
              >
                <CardContent>
                  <Typography variant='h4' fontSize='24px' fontWeight='bold'>
                    {post.mascota.nombre}
                  </Typography>

                  <Typography variant='body1' fontSize='16px'>
                    {petFilters}
                  </Typography>

                  <Typography variant='body1' fontSize='16px'>
                    {post.usuario.ciudad}
                  </Typography>

                  <Typography variant='body1' fontSize='16px'>
                    {post.usuario.nombre}
                  </Typography>
                </CardContent>
              </Card>
            )}

            <Card
              sx={() => ({
                marginTop: '23px'
              })}
            >
              <CardContent>
                <Typography variant='body1' fontSize='16px'>
                  {post.descripcion}
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={() => ({
                marginTop: '23px'
              })}
            >
              <CardContent>
                <Typography variant='h4' fontSize='20px'>
                  Información de salud
                </Typography>
                <Typography variant='body1' fontSize='16px' marginTop='16px'>
                  {post.mascota.info_salud}
                </Typography>
              </CardContent>
            </Card>
            <Typography variant='h4' fontSize='24px' margin='34px 0 14px'>
              Haz una pregunta
            </Typography>
            <FormControl fullWidth>
              <TextField
                value={question}
                id='question'
                label='Escribe tu pregunta'
                variant='outlined'
                onChange={handleChangeQuestion}
              />
            </FormControl>
            <Button
              variant='contained'
              sx={() => ({
                margin: '25px 0 36px'
              })}
              onClick={() => {
                handleClick()
              }}
            >
              PREGUNTAR
            </Button>
            {questions.map((item: RenderTree) => (
              <TreeView
                aria-label='rich object'
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                {renderTree(item)}
              </TreeView>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
