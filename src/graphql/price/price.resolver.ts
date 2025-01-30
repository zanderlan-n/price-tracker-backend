import { PriceService } from './price.service';

const priceService = new PriceService();

export const priceResolvers = {
  Query: {
    prices: async (_: any, { productId }: { productId: number }) =>
      await priceService.getPricesByProduct(productId),
  },
  Mutation: {
    addPrice: async (
      _: any,
      {
        productId,
        supermarketId,
        price,
      }: { productId: number; supermarketId: number; price: number }
    ) => await priceService.addPrice(productId, supermarketId, price),
  },
};
