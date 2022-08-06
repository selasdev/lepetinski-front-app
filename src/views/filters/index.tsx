import { Box, Link } from '@mui/material'
import Navbar from '../../components/organisms/Navbar'
import { FiltersForm } from './form'
import { IFiltersFormValues } from './types'
import { useNavigate } from 'react-router'

export const FiltersView = () => {
  const navigate = useNavigate()

  const onFormSubmit = (formValues: IFiltersFormValues) => {
    console.log(formValues)

    navigate('/search/Perro/beagle/mediano')
  }
  return (
    <>
      <Navbar />
      <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
        <Link href='/search/Perro/beagle/mediano' underline='none'>
          {' '}
          VOLVER
        </Link>
        <FiltersForm onSubmit={onFormSubmit} />
      </Box>
    </>
  )
}
