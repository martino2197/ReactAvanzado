import React from 'react'
// import { Category } from './components/Category'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
// import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
// import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

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
          : <><ListOfCategories /><ListOfPhotoCards categoryId={1} /></>
      }
    </>
  )
}
