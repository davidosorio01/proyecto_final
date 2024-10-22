<script>  
	let { data } = $props();  
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

    <ul class="todos">  
		{#each data.jugadores as jugador (jugador.id)}
			<li>  
				{jugador.nombre}  
			</li>  
		{/each}  
	</ul>  
</div>