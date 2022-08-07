import { Dialog, DialogContent, DialogContentText, Button, Stack } from '@mui/material'
import { IFilters } from '../search/filters/types'

export const CancelAdoptModal = ({ open, handleClose }: IFilters) => {
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
          ¿Quieres cancelar la adopción de Gordo?
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
          <Button onClick={handleClose} autoFocus fullWidth variant='contained' color='error'>
            CANCELAR
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
