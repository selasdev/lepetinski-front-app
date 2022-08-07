import { Box, Button, Link } from '@mui/material'
import { useState } from 'react'
import { CardAdopt } from '../../components/molecules/Card/CardAdopt'
import Navbar from '../../components/organisms/Navbar'
import { CancelAdoptModal } from './cancelAdoptModal'
import { data } from './__mocks__/data'

export const PetAdoptView = () => {
  const [openCancelAdoptionModal, setOpenCancelAdoptionModal] = useState<boolean>(false)

  return (
    <>
      <Navbar />
      <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
        <Link href='/profile' underline='none'>
          {' '}
          VOLVER
        </Link>
        <Box maxWidth='500px' margin='25px auto 0'>
          <CardAdopt {...data} />
          <Button
            onClick={() => setOpenCancelAdoptionModal(true)}
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
      <CancelAdoptModal
        open={openCancelAdoptionModal}
        handleClose={() => setOpenCancelAdoptionModal(false)}
      />
    </>
  )
}
