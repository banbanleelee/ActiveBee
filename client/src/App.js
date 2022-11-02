import './App.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from '../src/pages/Home';
import Calories from '../src/pages/Calories';

import Nav from '../src/components/Nav'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// commenting out to try and get heroku deployment
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Routes>
          <Route exact='true' path='/' element = {
            <div>
              <Home />
            </div>
          }>
          </Route>
          <Route exact='true' path='/calories' element = {
            <div>
              <Calories />
            </div>
          }>
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>

  );
}

export default App;
