import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { ICardAdopt } from './types'

export const CardAdopt = ({ img, owner, phoneNumber, address, email }: ICardAdopt) => {
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
          <Typography gutterBottom variant='h5'>
            {owner}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {phoneNumber}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {address}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {email}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  )
}
