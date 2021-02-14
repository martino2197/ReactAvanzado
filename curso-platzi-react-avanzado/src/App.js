import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
// import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

// Reach Router
import { Router } from '@reach/router'

export const App = () => {
  // // recibe un parametro la query string de la barra de direcciones (window.location.search)
  // const urlParams = new window.URLSearchParams(window.location.search)
  // // para poder recuperar el detailId en la que estamos navegando
  // const detailId = urlParams.get('detail')
  // console.log('====================================')
  // console.log(detailId)
  // console.log('====================================')
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar />
    </>
  )
}
