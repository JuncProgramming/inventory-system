import { prisma } from '../src/config/db.js';

async function main() {
  console.log('Cleaning up the database');
  
  await prisma.productTransaction.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log('Creating mock data');

  await prisma.category.create({
    data: {
      name: 'Elektronika',
      products: {
        create: [
          { name: 'Klawiatura Keychron K2', stockLevel: 15 },
          { name: 'Myszka Logitech MX Master 3', stockLevel: 3 },
          { name: 'Monitor Dell 27"', stockLevel: 0 },
        ],
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Meble Biurowe',
      products: {
        create: [
          { name: 'Fotel Ergonomiczny Herman Miller', stockLevel: 8 },
          { name: 'Biurko Elektryczne', stockLevel: 12 },
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