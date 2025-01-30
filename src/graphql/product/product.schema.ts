import { gql } from 'apollo-server';

export const productSchema = gql`
  type Product {
    id: Int!
    name: String!
    barcode: String
    createdAt: String!
    updatedAt: String!
    prices: [Price!]!
  }

  extend type Query {
    products: [Product!]!
    product(id: Int!): Product
  }

  extend type Mutation {
    addProduct(name: String!, barcode: String): Product!
    deleteProduct(id: Int!): Boolean!
  }
`;
