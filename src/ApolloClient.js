import ApolloClient from 'apollo-boost';
// import { gql } from "apollo-boost";

export const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
})

// client.query({
//   query:gql `
//     {
//       rates(currency: "USD") {
//         currency
//       }
//     }
//   `
// }).then(result => {
//   console.log(result)
// })