import { Box, Button, Link, Skeleton } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CardAdopt } from '../../components/molecules/Card/CardAdopt'
import Navbar from '../../components/organisms/Navbar'
import { CancelAdoptModal } from './cancelAdoptModal'

export const PetAdoptView = () => {
  const [openCancelAdoptionModal, setOpenCancelAdoptionModal] = useState<boolean>(false)

  const { id , idpost} = useParams();
  const [loader, setLoader] = useState<Boolean>(false)
  const idAdop = id ? id : '0'

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
        setLoader(true)
      })
      .catch(function (error:any) {
        console.log(error)
      })
      
  }, [idpost])

  return (
    <>
      <Navbar />
      <Box padding={{ xs: '16px', sm: '20px 30px', md: '20px 110px' }}>
        <Link href='/profile' underline='none'>
          {' '}
          VOLVER
        </Link>
        {loader
            ?  
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
                CANCELAR ADOPCIÓN
              </Button>
          </Box>
          : <Skeleton variant="rectangular" sx={{  width: '100%', height: '40vh', borderRadius: '10px' }}/>
        }
      </Box>
      <CancelAdoptModal
        open={openCancelAdoptionModal}
        id={idAdop}
        handleClose={() => setOpenCancelAdoptionModal(false)}
      />
    </>
  )
}
