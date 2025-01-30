import { prisma } from '../../config/clients';

export const productResolvers = {
  Query: {
    products: async () => await prisma.product.findMany(),
    product: async (_: any, { id }: { id: number }) =>
      await prisma.product.findUnique({ where: { id } }),
  },
  Mutation: {
    addProduct: async (
      _: any,
      { name, barcode }: { name: string; barcode?: string }
    ) => await prisma.product.create({ data: { name, barcode } }),
    deleteProduct: async (_: any, { id }: { id: number }) => {
      await prisma.product.delete({ where: { id } });
      return true;
    },
  },
};
