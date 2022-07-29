import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'
import HomeView from '../views/home'
import { SignIn } from '../views/signIn'
import { Login } from '../views/Login'
const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path='/' element={<HomeView />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
