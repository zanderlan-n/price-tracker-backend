import { gql } from 'apollo-server';

export const priceSchema = gql`
  type Price {
    id: Int!
    productId: Int!
    supermarketId: Int!
    price: Float!
    date: String!
    product: Product!
    supermarket: Supermarket!
  }

  extend type Query {
    prices(productId: Int!): [Price!]!
  }

  extend type Mutation {
    addPrice(productId: Int!, supermarketId: Int!, price: Float!): Price!
  }
`;
