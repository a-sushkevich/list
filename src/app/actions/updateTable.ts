'use server'

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { type TableRecord } from "../types";

export async function updateTable (rowSelection: TableRecord[]) {
    try {
      await Promise.all(
        rowSelection.map(({ id, isActive }) =>
          db.currency.update({ where: { id }, data: { isActive: !isActive } })
        )
      );

      revalidatePath('/');
    } catch (error) {
        console.log(error)
    }
}