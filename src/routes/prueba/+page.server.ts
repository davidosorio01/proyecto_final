import { db } from "$lib/server/database/connect";
import { player }  from "$lib/server/database/data";
import type { RequestEvent } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';


export async function load(){
  const jugadores = await db.select({
    id: player.id,
	  nombre: player.nombre,
    grado: player.grado,		
  }).from(player);
  return { jugadores }
}

export const actions = {  
  crear: async ({ request }: RequestEvent) => {  
    const formData = await request.formData();  
    const data = Object.fromEntries(formData);
    console.log(data)
    await db.insert(player).values({  
    nombre: data.nombre as string,
    grado: data.grado as string
    });
  },

  borrar: async ({ request }: RequestEvent) => {

		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		let id = String((data.id))

		await db.delete(player).where( eq(player.id, parseInt(id)))
  }
};
 