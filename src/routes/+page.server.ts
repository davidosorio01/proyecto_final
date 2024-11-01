import type { Cookies } from '@sveltejs/kit';  
import { fail, redirect } from '@sveltejs/kit';  
import bcrypt from 'bcrypt';  
import crypto from 'crypto';  
import type { Actions } from './$types';
import { db } from '$lib/server/database/connect';  
import { usuarios } from '$lib/server/database/data';  
import { eq } from 'drizzle-orm';  
import type { RequestEvent } from '@sveltejs/kit'; 

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(307, '/Menu'); // Asegúrate de lanzar un error para redireccionar
	}
}

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = Object.fromEntries(await request.formData());
		const password = String(data.password);

		// Validaciones
		if (
			typeof data.email !== 'string' ||
			typeof data.password !== 'string' ||
			!data.email ||
			!data.password
		) {
			return { invalid: true };
		}

		// Verificación en la base de datos
		const user = await db.select().from(usuarios).where(eq(usuarios.email, data.email));

		if (!user || user.length === 0 || !user[0].passwordHash) {
			return { credentials: true };
		}

		const findpass = await bcrypt.compare(password, user[0].passwordHash);

		if (!findpass) {
			return { credentials: true };
		}

		const authenticatedUser = crypto.randomUUID();

		await db
			.update(usuarios)
			.set({ token: authenticatedUser })
			.where(eq(usuarios.email, data.email));

		cookies.set('session', authenticatedUser, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30 // Vencimiento en 30 días
		});

		// Redirecciona al usuario a la página principal
		throw redirect(302, '/Menu');
	},

	register: async ({ request }: RequestEvent) => {
		const data = Object.fromEntries(await request.formData());
		if (
			typeof data.apellido !== 'string' ||
			typeof data.email !== 'string' ||
			typeof data.password !== 'string' ||
			typeof data.nombre !== 'string' ||
			typeof data.nacimiento !== 'string' || isNaN(Date.parse(data.nacimiento)) || // Validación de fecha
			!data.apellido ||
			!data.email ||
			!data.password ||
			!data.nombre ||
			!data.nacimiento
		) {
			return fail(400, { invalid: true });
		}
		
		const user = await db.select().from(usuarios).where(eq(usuarios.email, data.email));
		
		if (user.length > 0) {
			return fail(400, { user: true });
		}
		
		const values = {  
			nombres: data.nombre || "", // Asegúrate de que coincidan los nombres
			apellidos: data.apellido || "",  
			email: data.email || "",
			passwordHash: await bcrypt.hash(data.password, 10),  
			token: crypto.randomUUID()  
		};  
		
		await db.insert(usuarios).values(values);
		
		// Redirecciona a la página principal después del registro
		throw redirect(303, '/Menu');
	}
};
