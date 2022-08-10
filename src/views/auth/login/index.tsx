import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../../../components/organisms/Navbar'
import { useAuthenticationProvider } from '../../../contexts/Auth/context'
import LoginForm, { FormValuesType } from './form'

const LoginView = () => {
  const navigate = useNavigate()
  const { setUser } = useAuthenticationProvider()

  const onFormSubmit = (formValues: FormValuesType) => {
    if (setUser) {

      let datos:Object = {
        "email": formValues.email,
        "password": formValues.password
      }
      const config = {
        headers: { 
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : '*'
        }
      } 
      axios.post('https://t00e9m.deta.dev/login', datos, config)
        .then(function (response:any) {
          console.log(response)

          setUser({
            email: response.data.email,
            birthDate: response.data.fecha_nacimiento,
            id: response.data.id,
            address: 'La Rotaria',
            age: '22 años',
            name: response.data.nombre
          })
          navigate('/')
        })
        .catch(function (error:any) {
          console.log(error)
        })
      // setUser({
      //   name: 'José Pérez',
      //   birthDate: '06/04/1989',
      //   email: formValues.email,
      //   address: 'La Rotaria',
      //   age: '22 años',
      //   id: '123'
      // })
    }
    // navigate('/')
  }

  return (
    <React.Fragment>
      <Navbar />
      <LoginForm onSubmit={onFormSubmit} />
    </React.Fragment>
  )
}

export default LoginView
