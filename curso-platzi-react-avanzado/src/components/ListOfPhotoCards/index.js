import React from 'react'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { PhotoCard } from '../PhotoCard'

// export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
//   return (
//     <ul>
//       {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
//     </ul>
//   )
// }

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id} {...photo} />
      ))}
    </ul>

  )
}

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
