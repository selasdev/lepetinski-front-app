import { Box, Button, Link } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CardAdopt } from '../../components/molecules/Card/CardAdopt'
import Navbar from '../../components/organisms/Navbar'
import { CancelAdoptModal } from './cancelAdoptModal'
import { data } from './__mocks__/data'

export const PetPostView = () => {
  const [openCancelAdoptionModal, setOpenCancelAdoptionModal] = useState<boolean>(false)

  const {idpost} = useParams();

  const idAdop = idpost ? idpost : '0'

  const [post, setPost] = useState({
    descripcion: '',
    id: 0,
    celular_contacto: '',
    mascota: {
      foto_url: '',
      nombre: '',
      edad: 0,
      info_salud: ''
    },
    usuario: {
      nombre: '',
      ciudad: '',
      email: ''
    }
  })

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.get('https://t00e9m.deta.dev/post/'+idpost, config)
      .then(function (response:any) {
        setPost(response.data)
      })
      .catch(function (error:any) {
        console.log(error)
      })
      
  }, [])

  return (
    <>
      <Navbar />
      <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
        <Link href='/profile' underline='none'>
          {' '}
          VOLVER
        </Link>
        <Box maxWidth='500px' margin='25px auto 0'>
          <CardAdopt img={post.mascota.foto_url} owner={post.usuario.nombre} phoneNumber={post.celular_contacto} address={post.usuario.ciudad} email={post.usuario.email} />
          <Button
            onClick={() => setOpenCancelAdoptionModal(true)}
            variant='contained'
            fullWidth
            color='error'
            sx={() => ({
              marginTop: '25px'
            })}
          >
            CANCELAR PUBLICACION
          </Button>
        </Box>
      </Box>
      <CancelAdoptModal
        open={openCancelAdoptionModal}
        id={idAdop}
        handleClose={() => setOpenCancelAdoptionModal(false)}
      />
    </>
  )
}
