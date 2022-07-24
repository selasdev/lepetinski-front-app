import React from 'react'
import { BackgroundBanner } from '../../components/organisms/BackgroundBanner'
import { Categories } from '../../components/organisms/Categories'
import { Hero } from '../../components/organisms/Hero'
import Navbar from '../../components/organisms/Navbar'
import { useAuthenticationProvider } from '../../contexts/Auth/context'

const HomeView = () => {
  const { authenticated } = useAuthenticationProvider()

  return (
    <React.Fragment>
      <Navbar />
      <BackgroundBanner />
      {!authenticated ? <Hero /> : null}
      <Categories />
    </React.Fragment>
  )
}

export default HomeView
