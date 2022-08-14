import { Dialog, DialogContent, DialogContentText, Button, Stack } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { IFilters } from '../search/filters/types'

export const CancelAdoptModal = ({ open, id, handleClose }: IFilters) => {
  const navigate = useNavigate()

  const handleCancel = () => {
    
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.delete(`https://t00e9m.deta.dev/post/${id}`, config)
      .then(function (response:any) {
        navigate('/profile')
      })
      .catch(function (error:any) {
        console.log(error)
      })
    
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent
        sx={() => ({
          textAlign: 'center'
        })}
      >
        <DialogContentText
          id='alert-dialog-description'
          sx={() => ({
            textAlign: 'center',
            fontSize: '24px'
          })}
        >
          ¿Quieres cancelar la Publicacion?
        </DialogContentText>
        <DialogContentText
          id='alert-dialog-description'
          color='error'
          sx={() => ({
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '20px'
          })}
        >
          Esto no se puede deshacer
        </DialogContentText>
        <Stack direction='column' spacing={3}>
          <Button
            onClick={handleClose}
            fullWidth
            variant='contained'
            color='secondary'
            href='/profile'
          >
            NO quiero CANCELAR
          </Button>
          <Button onClick={handleCancel} autoFocus fullWidth variant='contained' color='error'>
            CANCELAR
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
