import { db } from "$lib/server/database/connect"
import { player } from "$lib/server/database/data"

export async function load(){

    const jugadores = await db.select().from(player);
    console.log(jugadores);
    return { jugadores }

}