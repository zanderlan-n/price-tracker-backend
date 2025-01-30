import { gql } from 'apollo-server';
import { productSchema } from './product/product.schema';
import { supermarketSchema } from './supermarket/supermarket.schema';
import { priceSchema } from './price/price.schema';

export const typeDefs = gql`
  ${productSchema}
  ${supermarketSchema}
  ${priceSchema}

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
