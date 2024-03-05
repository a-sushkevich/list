import { list } from './parseData.js';
import { db } from "./db.js";

async function main() {
  await db.user.createMany({
    data: list
  })

  const result = await db.user.findFirst();

  console.log('Seeded result:', result)
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })

  export {}