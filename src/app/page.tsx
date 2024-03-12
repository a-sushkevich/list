import { fetchTable } from "./actions/fetchTable"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default async function ListPage() {
  const data = await fetchTable()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  )
}
