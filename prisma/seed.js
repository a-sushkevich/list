import { PrismaClient } from '@prisma/client'
import { list } from './parseData.mjs';

const prisma = new PrismaClient()
console.log(list)
async function main() {
  await prisma.user.createMany({
    data: list
  })

  const result = await prisma.user.findFirst();

  console.log('Seeded result:', result)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })