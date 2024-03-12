import { list } from './parseData.js';
import { db } from "./db.js";

async function main() {
  await db.currency.createMany({
    data: list
  })
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