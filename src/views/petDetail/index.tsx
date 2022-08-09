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
import { useState } from 'react'

export const PetDetailView = () => {
  const petFilters =
    // eslint-disable-next-line no-useless-concat
    mockData.petAge + ' años' + ' - ' + mockData.petGender + ' - ' + mockData.petRace

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
        <Link href='/sign-in' underline='none'>
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
            <StyledImage src={mockData.petImage} alt='pet' />
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
                    {mockData.petName}
                  </Typography>

                  <Stack spacing={1} direction='row'>
                    {mockData.filters.map((filter) => (
                      <Chip label={filter} color='secondary' />
                    ))}
                  </Stack>
                </Stack>
              )}

              <Stack spacing={2}>
                <Button
                  href='/finish-adopt'
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
                {mockData.owner} - {mockData.address}
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
                    {mockData.petName}
                  </Typography>

                  <Typography variant='body1' fontSize='16px'>
                    {petFilters}
                  </Typography>

                  <Typography variant='body1' fontSize='16px'>
                    {mockData.address}
                  </Typography>

                  <Typography variant='body1' fontSize='16px'>
                    {mockData.owner}
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
                  {mockData.petDescription}
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
                  {mockData.petHealthInfo}
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
