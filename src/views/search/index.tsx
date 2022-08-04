import Navbar from '../../components/organisms/Navbar'
import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router'
import { results } from './__mocks__/data'
import { CardPet } from '../../components/molecules/Card/CardPet'
import { ICardPet } from '../../components/molecules/Card/CardPet/types'

export const SearchView = (): JSX.Element => {
  const { category } = useParams()

  return (
    <>
      <Navbar />
      <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
        <Link href='/' underline='none'>
          {' '}
          VOLVER
        </Link>
        <Stack direction='row' justifyContent='space-between' marginTop='36px'>
          <Typography variant='h4' fontSize='24px' fontWeight='bold'>
            {category}
          </Typography>
          <Button color='secondary' variant='contained'>
            FILTROS
          </Button>
        </Stack>
        <Grid container spacing={4} marginTop={{ xs: '20px', sm: '40px' }}>
          {results.map((item: ICardPet) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardPet {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
