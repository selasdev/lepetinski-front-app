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
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useParams } from 'react-router'
import { results } from './__mocks__/data'
import { CardPet } from '../../components/molecules/Card/CardPet'
import { ICardPet } from '../../components/molecules/Card/CardPet/types'
import SearchIcon from '@mui/icons-material/Search'
import { FiltersView } from './filters/index'
import { useState } from 'react'

export const SearchView = (): JSX.Element => {
  const { category, race, size } = useParams()
  const theme = useTheme()
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'))
  const [openFilters, setOpenFilters] = useState<boolean>(false)
  return (
    <>
      <Navbar />
      <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
        <Link href='/' underline='none'>
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
              {category && <Chip label={category} />}
              {race && <Chip label={race} />}
              {size && <Chip label={size} />}
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
          {results.map((item: ICardPet, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.name + idx}>
              <CardPet {...item} />
            </Grid>
          ))}
        </Grid>
        <FiltersView open={openFilters} handleClose={() => setOpenFilters(false)} />
      </Box>
    </>
  )
}
