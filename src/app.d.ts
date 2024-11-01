// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		 interface Locals {
			user:{
				nombres: string
				apellidos: string
				email: string
				passwordHash: string | null
				token: string | null
				nacimiento: Date | null;
			}
			
		 }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
