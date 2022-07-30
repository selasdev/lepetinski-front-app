import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'
import HomeView from '../views/home'
import { SignIn } from '../views/signin'
import { Login } from '../views/login'
const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path='/' element={<HomeView />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
