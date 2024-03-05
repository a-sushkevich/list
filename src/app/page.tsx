import { columns } from "./columns"
import { DataTable } from "./data-table"
import { db } from "~/server/db";

async function getData() {
  const result = await db.user.findMany()
  
  return result
}

export default async function ListPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
