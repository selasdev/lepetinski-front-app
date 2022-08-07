import { Box, Button, Link } from '@mui/material'
import { CardAdopt } from '../../components/molecules/Card/CardAdopt'
import Navbar from '../../components/organisms/Navbar'
import { data } from './__mocks__/data'
export const PetAdoptView = () => {
  return (
    <>
      <Navbar />
      <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
        <Link href='/' underline='none'>
          {' '}
          VOLVER
        </Link>
        <Box maxWidth='500px' margin='25px auto 0'>
          <CardAdopt {...data} />
          <Button
            variant='contained'
            fullWidth
            color='error'
            sx={() => ({
              marginTop: '25px'
            })}
          >
            CANCELAR ADOPCIÓN
          </Button>
        </Box>
      </Box>
    </>
  )
}
