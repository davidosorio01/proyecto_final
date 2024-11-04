<script>  
	let { data } = $props();  
	let { jugadores } = data;
    import "$lib/CSS/prueba.css";
	import LogoPagina from "$lib/IMAGES/LogoPag.jpg";
</script>  

<div class="navbar" data-sveltekit-preload-data="tap" data-sveltekit-reload>
    <img src={LogoPagina} alt="Logo">
    <a href="/Menu"  class="back-button">
        <i  class="fas fa-arrow-left"></i> Volver
    </a>
</div>

<div class="container">  
    <h1>AGREGATE COMO JUGADOR</h1>  

<form method="POST" action="?/crear">  
    <div>  
        <label for="nombre">  
            Nombre del Jugador  
        </label>  
        <input name="nombre" type="text" placeholder="Ingresa el nombre" autocomplete="off" />   
    </div>  

    <div>  
        <label for="grado">  
            Grado  
        </label>  
        <input name="grado" type="text" placeholder="Ingresa el grado" autocomplete="off"/>   
    </div>		  

    <div class="flex">  
        <button type="submit" class="btn btn-primary">  
            Guardar 
        </button>  
        <button type="reset" class="btn btn-secondary">  
            Cancelar  
        </button>  
    </div>  
</form>

    <div class="card-container">  
        {#each data.jugadores as jugador (jugador.id)}
            <div class="card">  
                <h2>{jugador.nombre}</h2>  
                <h2>Grado: {jugador.grado}</h2>
                <form action="?/editar" method="POST" style="display:inline;">
                    <input type="hidden" name="id" value={jugador.id}>
                    <button formaction="?/editar" class="editar">
                        Editar
                    </button>
                </form>
                <form action="?/borrar" method="POST" style="display:inline;">
                    <input type="hidden" name="id" value={jugador.id}>
                    <button formaction="?/borrar" class="eliminar">
                        Eliminar
                    </button>  
                </form>
            </div>  
        {/each}  
    </div>  
</div>