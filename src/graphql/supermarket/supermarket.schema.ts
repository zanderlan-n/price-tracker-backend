import { gql } from 'apollo-server';

export const supermarketSchema = gql`
  type Supermarket {
    id: Int!
    name: String!
    latitude: Float!
    longitude: Float!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    supermarkets: [Supermarket!]!
    supermarket(id: Int!): Supermarket
  }

  extend type Mutation {
    addSupermarket(
      name: String!
      latitude: Float!
      longitude: Float!
    ): Supermarket!
    deleteSupermarket(id: Int!): Boolean!
  }
`;
