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
      setUser({
        name: 'José Pérez',
        birthDate: '06/04/1989',
        email: formValues.email,
        id: '123'
      })
    }
    navigate('/')
  }

  return (
    <React.Fragment>
      <Navbar />
      <LoginForm onSubmit={onFormSubmit} />
    </React.Fragment>
  )
}

export default LoginView
