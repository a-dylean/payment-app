import { prisma } from "./prisma";

const productsData = [
  {
    name: "T-shirt Blanc",
    price: 19.99,
    inventory: 100,
  },
  {
    name: "Jean Slim Noir",
    price: 49.99,
    inventory: 75,
  },
  {
    name: "Chaussures de Sport",
    price: 89.99,
    inventory: 50,
  },
  {
    name: "Veste en Cuir",
    price: 199.99,
    inventory: 25,
  },
  {
    name: "Robe d'Été",
    price: 29.99,
    inventory: 60,
  },
  {
    name: "Cravate en Soie",
    price: 24.99,
    inventory: 40,
  },
  {
    name: "Sac à Main",
    price: 59.99,
    inventory: 30,
  },
  {
    name: "Chapeau Panama",
    price: 34.99,
    inventory: 20,
  },
  {
    name: "Écharpe en Laine",
    price: 29.99,
    inventory: 45,
  },
  {
    name: "Ceinture en Cuir",
    price: 39.99,
    inventory: 70,
  },
  {
    name: "Montre Classique",
    price: 149.99,
    inventory: 15,
  },
  {
    name: "Bottes en Cuir",
    price: 99.99,
    inventory: 40,
  },
  {
    name: "Lunettes de Soleil",
    price: 79.99,
    inventory: 50,
  },
  {
    name: "Chemise à Carreaux",
    price: 44.99,
    inventory: 55,
  },
  {
    name: "Pull-over Gris",
    price: 64.99,
    inventory: 35,
  },
  {
    name: "Short en Jean",
    price: 39.99,
    inventory: 60,
  },
  {
    name: "Sandales d'Été",
    price: 49.99,
    inventory: 40,
  },
  {
    name: "Bijoux Fantaisie",
    price: 14.99,
    inventory: 85,
  },
  {
    name: "Pantalon Chino",
    price: 54.99,
    inventory: 50,
  },
  {
    name: "Blouse Florale",
    price: 39.99,
    inventory: 40,
  },
];
async function seedDatabase() {
      await prisma.product.createMany({
        data: productsData
      })
}

seedDatabase()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
