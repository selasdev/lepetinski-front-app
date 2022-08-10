import Navbar from '../../../components/organisms/Navbar'
import React from 'react'
import { FormValuesType, RegisterForm } from './form'
import { useAuthenticationProvider } from '../../../contexts/Auth/context'
import { useNavigate } from 'react-router'
import axios from 'axios'

const SignInView = () => {
  const navigate = useNavigate()
  const { setUser } = useAuthenticationProvider()

  const onFormSubmit = (formValues: FormValuesType) => {
    if (setUser) {
      let datos:Object = {
        "nombre": formValues.name,
        "email": formValues.email,
        "fecha_nacimiento": formValues.date,
        "latitud": 0,
        "longitud": 0,
        "ciudad": 'Tachira',
        "password": formValues.password
      }
      const config = {
        headers: { 
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : '*'
        }
      } 
      axios.post('https://t00e9m.deta.dev/registro', datos, config)
        .then(function (response:any) {
          console.log(response)
          setUser({
            email: response.data.email,
            birthDate: response.data.fecha_nacimiento,
            id: response.data.id,
            name: response.data.nombre
          })
          navigate('/')
        })
        .catch(function (error:any) {
          console.log(error)
        })
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <RegisterForm onSubmit={onFormSubmit} />
    </React.Fragment>
  )
}

export default SignInView
