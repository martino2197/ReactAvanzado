import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost' // nos va a permitir empezar rapidamente con Apollo
import { ApolloProvider } from 'react-apollo' // vamos envolver nuestra aplicacion para poder ocupar apollo en cualquier parte del arbol de elementos
import { App } from './App'

// Esste client es el que vamos a utilizar como prop en ApolloProvider
const client = new ApolloClient({
  uri: 'https://petgram-server-martino2197.vercel.app/graphql' // el servidor de graphql
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'))
