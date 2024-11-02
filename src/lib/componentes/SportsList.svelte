<script lang="ts">
    export let filteredDeportes: Array<{name: string, logo: string}>;

    //el ejemplo de iteracion esta en notas
    const cards = [
        {href: '/futbol'},
        {href: '/baloncesto'},
        {}
    ]
</script>

<div class="box-info" id="sports-container">
    {#each filteredDeportes as deporte}
    <a href='/futbol'>
        <div class="sport-item">
            <img src={deporte.logo} alt={deporte.name}>
            <span class="text">
                <h3>{deporte.name}</h3>
                <p>Conocer más</p>
            </span>
        </div>
    </a>
    {/each}
</div>
