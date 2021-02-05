import { graphql } from 'react-apollo'
// gql nos va permitir hacer las querys como si fuera un string y apollo lo va a entender
import { gql } from 'apollo-boost'

// primera query
// withPhotos nos va a permitir envolver el componente y recuperar esa informacion,
// este patron se llama "Componente de Orden superior"
// Ya que es una funcion que se le pasa como parametro un componente
// y devuelve otro componente ya sea con mejoras o con props inyectadas
export const withPhotos = graphql(gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)
