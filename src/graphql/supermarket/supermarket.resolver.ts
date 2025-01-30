import { SupermarketService } from './supermarket.service';

const supermarketService = new SupermarketService();

export const supermarketResolvers = {
  Query: {
    supermarkets: async () => await supermarketService.getAllSupermarkets(),
    supermarket: async (_: any, { id }: { id: number }) =>
      await supermarketService.getSupermarketById(id),
  },
  Mutation: {
    addSupermarket: async (
      _: any,
      {
        name,
        latitude,
        longitude,
      }: { name: string; latitude: number; longitude: number }
    ) => await supermarketService.createSupermarket(name, latitude, longitude),
    deleteSupermarket: async (_: any, { id }: { id: number }) =>
      await supermarketService.deleteSupermarket(id),
  },
};
