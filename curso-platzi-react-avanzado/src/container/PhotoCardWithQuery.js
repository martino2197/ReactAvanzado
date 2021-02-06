import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { PhotoLoader } from '../components/PhotoLoader'

// deprecado
// import { gql } from 'apollo-boost'
// import { Query } from 'react-apollo' // Query es un render especial que nos permitira utilizar Render Props
import { gql, useQuery } from '@apollo/client'
// import { from } from 'apollo-boost'

const GET_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const getPhoto = (id) => {
  const { loading, error, data } = useQuery(GET_PHOTO, { variables: { id } })
  if (loading) return <PhotoLoader />
  if (error) return <p>Error :(</p>
  return <PhotoCard id={id} {...data.photo} />
}

export const PhotoCardWithQuery = ({ id }) => <>{getPhoto(id)}</>

// export const PhotoCardWithQuery = ({ id }) => (
//   <Query query={query} variables={{ id }}>
//     {
//     ({ loading, error, data }) => {
//       const { photo = {} } = data
//       return <PhotoCard {...photo} />
//     }
//     }
//   </Query>
// )
