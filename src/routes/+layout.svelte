<!-- +layout.svelte -->  
<script>  
  import { onMount } from 'svelte';  
  import Spinner from '$lib/componentes/Spinner.svelte'; // Asegúrate de estar importando correctamente  

  export let children;   
  let isLoading = true; // Estado de carga  

  // Simular carga de contenido  
  onMount(() => {  
      setTimeout(() => {  
          isLoading = false; // Cambiar estado de carga después de 2 segundos  
      }, 500); // Simulación de espera  
  });  
</script>  

<Spinner loading={isLoading} size="60px" />  

{#if !isLoading}  
  {@render children()}  
{/if}