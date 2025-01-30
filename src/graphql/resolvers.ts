import { productResolvers } from './product/product.resolver';
import { supermarketResolvers } from './supermarket/supermarket.resolver';
import { priceResolvers } from './price/price.resolver';

export const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...supermarketResolvers.Query,
    ...priceResolvers.Query,
  },
  Mutation: {
    ...productResolvers.Mutation,
    ...supermarketResolvers.Mutation,
    ...priceResolvers.Mutation,
  },
};
