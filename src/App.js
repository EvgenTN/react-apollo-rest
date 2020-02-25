import React from 'react';
import { client } from './ApolloClient'
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import { Currency } from './components/Currency'

import logo from './logo.svg';
import './App.css';
import { Dogs } from './components/Dogs';

function App() {

  client.query({
  query:gql `
    {
      rates(currency: "USD") {
        currency
      }
    }
  `
}).then(result => {
  console.log(result)
})

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((e) => console.log(e))
  }

  return (
    <ApolloProvider client={client}>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <button onClick={fetchData} >click me</button>
          <Currency />
          <Dogs />
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </ApolloProvider>
  );
}

export default App;
