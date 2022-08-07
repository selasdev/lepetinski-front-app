import { Box, Button, Dialog, Slide } from '@mui/material'
import { FiltersForm } from './form'
import { IFilters, IFiltersFormValues } from './types'
import Navbar from '../../../components/organisms/Navbar'
import { TransitionProps } from '@mui/material/transitions'
import React from 'react'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
export const FiltersView = ({ open, handleClose }: IFilters) => {
  const onFormSubmit = (formValues: IFiltersFormValues) => {
    console.log(formValues)
    handleClose()
  }
  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Navbar />
        <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
          <Button variant='text' onClick={handleClose}>
            VOLVER
          </Button>
          <FiltersForm onSubmit={onFormSubmit} />
        </Box>
      </Dialog>
    </>
  )
}
