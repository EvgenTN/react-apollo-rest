import gql from 'graphql-tag';

export const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;