import { prisma } from '../src/config/db.js';

async function main() {
  console.log('Cleaning up the database');
  
  await prisma.productTransaction.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log('Creating mock data');

  await prisma.category.create({
    data: {
      name: 'Electronics',
      products: {
        create: [
          { name: 'Keychron K2 Keyboard', stockLevel: 15 },
          { name: 'Logitech MX Master 3 Mouse', stockLevel: 3 },
          { name: 'Dell 27" Monitor', stockLevel: 0 },
        ],
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Office Furniture',
      products: {
        create: [
          { name: 'Herman Miller Ergonomic Chair', stockLevel: 8 },
          { name: 'Electric Desk', stockLevel: 12 },
        ],
      },
    },
  });

  console.log('Database initialized');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });