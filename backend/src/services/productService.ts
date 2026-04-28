import { prisma } from '@/config/db.js';

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      category: true, 
    },
    orderBy: {
      name: 'asc',
    }
  });

  return products;
};