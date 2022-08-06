export const kmMarks = [
  {
    value: 0,
    label: '0'
  },

  {
    value: 100,
    label: '100'
  }
]

export const ageMarks = [
  {
    value: 1,
    label: '1'
  },

  {
    value: 2,
    label: '2'
  },
  {
    value: 3,
    label: '3'
  },
  {
    value: 4,
    label: '4'
  },
  {
    value: 5,
    label: '5'
  }
]

export const fromYouValueLabelFormat = (value: number) => {
  return `${value}Km`
}

export const ageValueLabelFormat = (value: number) => {
  return `${value} años`
}

export const typeOptions = ['Perros', 'Gatos', 'Aves', 'Hamster', 'Reptiles', 'Galapagos']

export const raceOptions = [
  'No busco una raza en especifico',
  'Doberman',
  'Maltes',
  'Beagle',
  'Pastor Aleman',
  'Yokshire'
]

export const sizeOptions = ['No me importa', 'Pequeño', 'Mediano', 'Grande']
