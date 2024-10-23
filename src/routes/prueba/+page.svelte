<script>  
	let { data } = $props();  
	let { jugadores } = data;
    import "$lib/CSS/prueba.css"
</script>  

<div class="container">  
	<h1>AGREGATE COMO JUGADOR</h1>  

	<form method="POST" action="?/crear">  
		<label for="nombre">  
			Nombre del Jugador  
			<input name="nombre" type="text" placeholder="nombre jugador" autocomplete="off" />  
		</label>  
	</form>  

    <div class="card-container">  
		{#each data.jugadores as jugador (jugador.id)}
			<div class="card">  
				<h2>{jugador.nombre}</h2>  
				<form action="?/borrar" method="POST">
					<input type="hidden" name="id" value={jugador.id}>
					<button formaction="?/borrar" class="eliminar">
					Eliminar
					</button>  
				</form>
				
			</div>  
		{/each}  
	</div>  
</div>