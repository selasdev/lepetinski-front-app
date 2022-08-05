import { Card, CardMedia, CardContent, Typography, Stack, Box } from '@mui/material'
import { ICardPet } from './types'

export const CardPet = ({ img, name, features, address }: ICardPet) => {
  return (
    <Card>
      <CardContent>
        <CardMedia
          component='img'
          height='140'
          image={img}
          alt='pet'
          sx={() => ({
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
