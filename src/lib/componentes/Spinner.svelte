<!-- Spinner.svelte -->  
<script>  
  export let loading = false;  
  export let size = '50px'; // Valor predeterminado  
</script>  

{#if loading}  
  <div class="loading-container">  
    <div class="spinner" style="width: {size}; height: {size};"></div>  
  </div>  
{/if}  

<style>  
  .loading-container {  
    display: flex;  
    justify-content: center;  
    align-items: center;  
    height: 100vh;  
    position: fixed; /* Fijo para que se mantenga en el medio */  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background-color: #ffffff; /* Fondo blanco */  
    z-index: 1000; /* Asegúrate de que el spinner esté por encima de otros elementos */  
  }  

  .spinner {  
    border: 8px solid #f3f3f3; /* Color del borde de fondo */  
    border-top: 8px solid #e74c3c; /* Color rojo para el spinner */  
    border-radius: 50%;  
    animation: spin 1s linear infinite;  
  }  

  @keyframes spin {  
    0% {  
      transform: rotate(0deg);  
    }  
    100% {  
      transform: rotate(360deg);  
    }  
  }  
</style>