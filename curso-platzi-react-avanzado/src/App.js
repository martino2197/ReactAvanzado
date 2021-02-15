import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
// import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

// Reach Router
import { Router } from '@reach/router'

// UserLogged es un componente con render props
const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
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
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </UserLogged>
      <NavBar />
    </>
  )
}
