import { Navigate } from 'react-router'
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'
import HomeView from './../views/home/index'
import LoginView from '../views/auth/login/index'
import StartView from './../views/start/index'
import StartRacesView from './../views/start/races/index'
import StartSizeView from './../views/start/sizes/index'
import StartLocationView from './../views/start/location/index'
import { SearchView } from './../views/search/index'
import SignInView from '../views/auth/signin/index'
import { PetDetailView } from '../views/petDetail'
import { ProfileView } from '../views/profile'
import { PetAdoptView } from '../views/petAdopt'

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path='/' element={<HomeView />} />
        <Route path='/sign-in' element={<SignInView />} />
        <Route path='/login' element={<LoginView />} />
        <Route path='/start/' element={<StartView />} />
        <Route path='/start/:category' element={<StartRacesView />} />
        <Route path='/start/:category/:race' element={<StartSizeView />} />
        <Route path='/start/:category/:race/:size' element={<StartLocationView />} />
        <Route path='/search/:category/:race/:size' element={<SearchView />} />
        <Route path='/pet-detail/:id' element={<PetDetailView />} />
        <Route path='/profile' element={<ProfileView />} />
        <Route path='/pet-adopt/:id' element={<PetAdoptView />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
