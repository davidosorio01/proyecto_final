<script lang="ts">
    export let toggleSidebar: () => void;
    export let searchValue: string;

    import LogoPagina from "$lib/IMAGES/LogoPag.jpg";
</script>

<nav>
    <button on:click={toggleSidebar} aria-label="Toggle Sidebar" class="menu-btn">
        <i class='bx bx-menu'></i>
    </button>

    <a href="/empezar" class="nav-link categorias" data-sveltekit-preload-data='tap' data-sveltekit-reload>Categorías</a>

    <form on:submit|preventDefault>
        <div class="form-input">
            <input 
                type="search" 
                placeholder="Search..." 
                class="input" 
                bind:value={searchValue}
            >
            <button type="submit" class="search-btn">
                <i class='bx bx-search'></i>
            </button>
        </div>
    </form>

    <a href="/empezar" class="profile" data-sveltekit-preload-data='tap' data-sveltekit-reload>
        <img src={LogoPagina} class="logo" alt="Logo de la página">
    </a>
</nav>

<style>
    nav {
        height: 56px;
        background: #fff;
        padding: 0 24px;
        display: flex;
        align-items: center;
        grid-gap: 24px;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 90;
    }

    /* Estilos para el nuevo botón */
    .menu-btn {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    nav .form-input {
        display: flex;
        align-items: center;
        height: 36px;
    }

    nav .form-input input {
        flex-grow: 1;
        padding: 0 16px;
        height: 100%;
        border: none;
        background: #eee;
        border-radius: 36px 0 0 36px;
        outline: none;
    }

    nav .form-input button {
        width: 36px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #eee;
        color: #333;
        font-size: 18px;
        border: none;
        outline: none;
        border-radius: 0 36px 36px 0;
        cursor: pointer;
    }
</style>
