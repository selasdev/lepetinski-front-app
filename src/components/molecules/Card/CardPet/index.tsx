import { Card, CardMedia, CardContent, Typography, Stack, Box } from '@mui/material'
import { ICardPet } from './types'
import { useLocation, useNavigate } from 'react-router'
import { useState } from 'react'
import styled from 'styled-components'
import { SavedPetDialog } from './dialog'

const StyledCard = styled(Card)`
  box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.25) !important;
  filter: drop-shadow(0px 0px 1px rgba(12, 26, 75, 0.24)) !important;
  border-radius: 16px !important;
  cursor: pointer;
`

export const CardPet = ({ img, name, features, address, saved = false }: ICardPet): JSX.Element => {
  const navigate = useNavigate()
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const location = useLocation()

  const cardClickCallback = () => {
    setDialogOpen(true)

    if (!saved) {
      switch (location.pathname) {
        case '/profile':
          navigate('/pet-adopt')
          break
        case '/search':
          navigate('/pet-detail')
          break
        default:
          break
      }
    } else {
      setDialogOpen(true)
    }
  }

  return (
    <>
      <StyledCard onClick={cardClickCallback}>
        <CardContent>
          <CardMedia
            component='img'
            height='140'
            image={img}
            alt='pet'
            sx={() => ({
              width: '100%',
              borderRadius: '15px'
            })}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>
            <Stack direction='row' divider={<Box margin='0 5px'> - </Box>}>
              {features?.map((feature, idx) => (
                <Typography variant='body2' color='text.secondary' key={idx + feature}>
                  {feature}
                </Typography>
              ))}
            </Stack>
            <Typography variant='body2' color='text.secondary'>
              {address}
            </Typography>
          </CardContent>
        </CardContent>
      </StyledCard>
      <SavedPetDialog
        open={dialogOpen}
        name={name}
        onClose={() => {
          setDialogOpen(false)
        }}
      />
    </>
  )
}
