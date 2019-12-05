import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://rickandmortyapi.com/graphql/"
});

const client = new ApolloClient({
  link,
  cache
});

client
  .query({
    query: gql`
    query {
      characters(page: 2, filter: { name: "rick" }) {
        info {
          count
        }
        results {
          name
        }
      }
      character(id: 1) {
        id
      }
    }
    `
  })
  .then(result => console.log(result));



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
