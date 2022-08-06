import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Button,
  Typography
} from '@mui/material'
import { FormEvent, useState } from 'react'
import { IFiltersForm, IFiltersFormValues } from './types'
import {
  ageMarks,
  kmMarks,
  raceOptions,
  sizeOptions,
  typeOptions,
  fromYouValueLabelFormat,
  ageValueLabelFormat
} from './utils'

export const FiltersForm = ({ onSubmit }: IFiltersForm): JSX.Element => {
  const [formValues, setFormValues] = useState<IFiltersFormValues>({
    type: '',
    race: '',
    size: '',
    fromYou: 0,
    age: [0, 0]
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({
      ...formValues
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography margin='16px 0' variant='h6' fontSize='20px' fontWeight={500}>
          ¿Qué estás buscando ?
        </Typography>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Tipo</InputLabel>
          <Select
            value={formValues.type}
            label='Tipo'
            onChange={(e: any) => {
              setFormValues({
                ...formValues,
                type: e.target.value
              })
            }}
          >
            {typeOptions.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography margin='16px 0' variant='h6' fontSize='20px' fontWeight={500}>
          ¿Alguna raza en especifico ?
        </Typography>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Raza</InputLabel>
          <Select
            value={formValues.race}
            label='Raza'
            onChange={(e: any) => {
              setFormValues({
                ...formValues,
                race: e.target.value
              })
            }}
          >
            {raceOptions.map((race) => (
              <MenuItem key={race} value={race}>
                {race}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography margin='16px 0' variant='h6' fontSize='20px' fontWeight={500}>
          Tamaño de tu compañero{' '}
        </Typography>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Tamaño</InputLabel>
          <Select
            value={formValues.size}
            label='Tamaño'
            onChange={(e: any) => {
              setFormValues({
                ...formValues,
                size: e.target.value
              })
            }}
          >
            {sizeOptions.map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography margin='16px 0' variant='h6' fontSize='20px' fontWeight={500}>
          ¿Qué tan cerca de ti?
        </Typography>
        <Slider
          valueLabelDisplay='auto'
          value={formValues.fromYou}
          defaultValue={50}
          marks={kmMarks}
          valueLabelFormat={fromYouValueLabelFormat}
          onChange={(e: any) => {
            setFormValues({
              ...formValues,
              fromYou: e.target.value
            })
          }}
        />

        <Typography margin='16px 0' variant='h6' fontSize='20px' fontWeight={500}>
          Edad
        </Typography>
        <Slider
          valueLabelFormat={ageValueLabelFormat}
          valueLabelDisplay='auto'
          marks={ageMarks}
          step={1}
          max={5}
          min={1}
          value={formValues.age}
          onChange={(e: any) => {
            setFormValues({
              ...formValues,
              age: e.target.value
            })
          }}
        />
        <Button variant='contained' type='submit' fullWidth>
          FILTRAR
        </Button>
      </form>
    </>
  )
}
