import React from 'react'
import ReactDOM from 'react-dom'
// import ApolloClient from 'apollo-boost' // nos va a permitir empezar rapidamente con Apollo
// import { ApolloProvider } from 'react-apollo' // vamos envolver nuestra aplicacion para poder ocupar apollo en cualquier parte del arbol de elementos

// importamos el contexto
import Context from './Context'
import { App } from './App'

// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// Esste client es el que vamos a utilizar como prop en ApolloProvider
// const client = new ApolloClient({
//   uri: 'https://petgram-server-martino2197.vercel.app/graphql', // el servidor de graphql
// })

// Este client es el que vamos a utilizar como prop desde @apollo/client, es obligatorio inicializar el cache
const client = new ApolloClient({
  uri: 'https://petgram-server-martino2197.vercel.app/graphql', // el servidor de graphql
  cache: new InMemoryCache()
})

// context nos ofrece dos componentes, uno es el provider y aqui podemos pasarle
// como value que es la prop todos los valores que queremos que nos pase en el
// arbol de elementos.
ReactDOM.render(
  // <Contex.Provider value={{ isAuth: true }}> ya no necesitamos identificar aqui el value
  // porque lo estamos inyectando en el componente Provider del Context que importamos
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
