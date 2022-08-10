import { Card, CardMedia, CardContent, Typography, Stack, Box } from '@mui/material'
import { ICardPet } from './types'
import { useNavigate } from 'react-router'

export const CardPet = ({ id, img, name, features, address, origin }: ICardPet) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if(origin =='1') navigate(`/pet-detail/${id}`)
    else navigate(`/pet-adopt/${id}`)
  }

  return (
    <Card onClick={() => handleClick()}>
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
    </Card>
  )
}
