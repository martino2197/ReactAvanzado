import React from 'react'

import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'
// gql nos va permitir hacer las querys como si fuera un string y apollo lo va a entender
import { gql } from 'apollo-boost'

// primera query
// withPhotos nos va a permitir envolver el componente y recuperar esa informacion,
// este patron se llama "Componente de Orden superior"
// Ya que es una funcion que se le pasa como parametro un componente
// y devuelve otro componente ya sea con mejoras o con props inyectadas
const withPhotos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  // console.log('====================================')
  // console.log(props)
  // console.log('====================================')
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

// Para aquellos que quieran utilizar la nueva caracteristica de Apollo Client utilizando hooks quedaria asi:
// Metodo usando la nueva caracteristica de hooks Apollo client

// import { useQuery } from '@apollo/react-hooks'
// const getPhotos = gql`
//   query getPhotos {
//     photos {
//       id
//       categoryId
//       src
//       likesuserId
//       liked
//     }
//   }
// `

// export const ListOfPhotoCards = () ={
//   const { loading, error, data } = useQuery(getPhotos)

//   if(loading) return <p>Cargando</p>
//   if (error) return <p>Error</p>

//   return(
//     <ul>
//       {data.photos.map((photoCard, id) => (
//         <PhotoCard key={id} {...photoCard} />
//       ))}
//     </ul>
//   )
// }

// npm install apollo-boost @apollo/react-hooks graphql
