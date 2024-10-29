import adapter from '@sveltejs/adapter-vercel'; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';  

const config = {  
    preprocess: vitePreprocess(),  
    kit: {  
        adapter: adapter(),  
        alias: {  
            $lib: 'src/lib', // Asegúrate de que esta línea esté presente  
        },  
    },  
};  

export default config;