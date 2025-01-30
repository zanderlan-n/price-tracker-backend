import { prisma } from '../../config/clients';

export class PriceService {
  async getPricesByProduct(productId: number) {
    return await prisma.price.findMany({
      where: { productId },
      include: {
        product: true,
        supermarket: true,
      },
    });
  }

  async addPrice(productId: number, supermarketId: number, price: number) {
    return await prisma.price.create({
      data: {
        productId,
        supermarketId,
        price,
      },
    });
  }
}
