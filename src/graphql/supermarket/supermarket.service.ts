import { prisma } from '../../config/clients';

export class SupermarketService {
  async getAllSupermarkets() {
    return await prisma.supermarket.findMany();
  }

  async getSupermarketById(id: number) {
    return await prisma.supermarket.findUnique({ where: { id } });
  }

  async createSupermarket(name: string, latitude: number, longitude: number) {
    return await prisma.supermarket.create({
      data: {
        name,
        latitude,
        longitude,
      },
    });
  }

  async deleteSupermarket(id: number) {
    await prisma.supermarket.delete({ where: { id } });
    return true;
  }
}
