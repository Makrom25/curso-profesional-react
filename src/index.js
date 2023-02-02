import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-24iykciv5.now.sh/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
