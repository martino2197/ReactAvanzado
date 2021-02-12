import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
// import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

import { Home } from './pages/Home'

// Reach Router
import { Router } from '@reach/router'

export const App = () => {
  // recibe un parametro la query string de la barra de direcciones (window.location.search)
  const urlParams = new window.URLSearchParams(window.location.search)
  // para poder recuperar el detailId en la que estamos navegando
  const detailId = urlParams.get('detail')
  console.log('====================================')
  console.log(detailId)
  console.log('====================================')
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            </Router>
      }
    </>
  )
}
