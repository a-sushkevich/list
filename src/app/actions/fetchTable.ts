'use server'

import { db } from "~/server/db";

export async function fetchTable () {
    try {
        const result = await db.currency.findMany()

        return result
    } catch (error) {
        console.log(error)
    }
}