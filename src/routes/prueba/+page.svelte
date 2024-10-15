<script>
    let {data} = $props();
    let { jugadores } = data;
</script>

<h1 style="text-align: center;">
    JUGADORES CVO
</h1>
{#each data.jugadores as jugador (jugador.id)}
    <p>
        id: {jugador.id}
    </p>
    <h1>
        {jugador.nombre}
    </h1>
{/each}