import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
// import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    // <ApolloProvider client={client}>
    <Router history={history}>
      <Routes />
    </Router>
    // </ApolloProvider>
  )
}

export default App;
