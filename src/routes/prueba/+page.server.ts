import { db } from "$lib/server/database/connect"
import { player }  from "$lib/server/database/data"
import type { RequestEvent } from '@sveltejs/kit'


export async function load(){
  const jugadores = await db.select({
    id: player.id,
	  nombre: player.nombre,		
  }).from(player);
  return { jugadores }
}

export const actions = {  
  crear: async ({ request }: RequestEvent) => {  
    const formData = await request.formData();  
    const data = Object.fromEntries(formData);
    console.log(data)  
    return

    await db.insert(player).values({  
    nombre: data.nombre as string
    });
  }  
};  