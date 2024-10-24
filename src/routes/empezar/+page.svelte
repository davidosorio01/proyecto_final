<script lang="ts">
	import '$lib/CSS/empezar.css';
	import Sidebar from '$lib/componentes/Sidebar.svelte';
	import Navbar from '$lib/componentes/Navbar.svelte';
	import SportsList from '$lib/componentes/SportsList.svelte';

	import aj from '$lib/IMAGES/images_empezar/Ajedrez.png';
	import ar from '$lib/IMAGES/images_empezar/ArtesMarciales.png';
	import at from '$lib/IMAGES/images_empezar/Atletismo.webp';
	import ba from '$lib/IMAGES/images_empezar/Badminton.png';
	import bm from '$lib/IMAGES/images_empezar/BalonMano.png';
	import bs from '$lib/IMAGES/images_empezar/Basquet.png';
	import be from '$lib/IMAGES/images_empezar/Beisbol copy.png';
	import bx from '$lib/IMAGES/images_empezar/Boxeo.png';
	import bi from '$lib/IMAGES/images_empezar/Billar.png';
	import cr from '$lib/IMAGES/images_empezar/Cricket.png';
	import es from '$lib/IMAGES/images_empezar/Esgrima.png';
	import fb from '$lib/IMAGES/images_empezar/Futbol.webp';
	import fa from '$lib/IMAGES/images_empezar/FutbolAmericano.png';
	import cy from '$lib/IMAGES/images_empezar/Ciclismo.png';
	import fi from '$lib/IMAGES/images_empezar/F1.png';
	import fr from '$lib/IMAGES/images_empezar/Fresbee.png';
	import gm from '$lib/IMAGES/images_empezar/Gimnasia.png';
	import gf from '$lib/IMAGES/images_empezar/Golf.webp';
	import ho from '$lib/IMAGES/images_empezar/Hockey.png';
	import la from '$lib/IMAGES/images_empezar/Lacrosse.png';
	import lo from '$lib/IMAGES/images_empezar/LogoPag.jpg';
	import mo from '$lib/IMAGES/images_empezar/MotoGp.png';
	import na from '$lib/IMAGES/images_empezar/Natación.webp';
	import pa from '$lib/IMAGES/images_empezar/PatinajeArtistico.png';
	import rg from '$lib/IMAGES/images_empezar/Rugby.png';
	import sk from '$lib/IMAGES/images_empezar/Skate.png';

	const deportes = [
		{ name: 'Futbol', logo: fb },
		{ name: 'Baloncesto', logo: bs },
		{ name: 'Béisbol', logo: be },
		{ name: 'Golf', logo: gf },
		{ name: 'Ciclismo', logo: cy },
		{ name: 'Natación', logo: na },
		{ name: 'Atletismo', logo: at },
		{ name: 'Rugby', logo: rg },
		{ name: 'Fórmula 1', logo: fi },
		{ name: 'Hockey', logo: ho },
		{ name: 'Boxeo', logo: bx },
		{ name: 'Artes marciales mixtas', logo: ar },
		{ name: 'Cricket', logo: cr },
		{ name: 'Badminton', logo: ba },
		{ name: 'Lacrosse', logo: la },
		{ name: 'Billar', logo: bi },
		{ name: 'Esgrima', logo: es },
		{ name: 'Patinaje artístico', logo: pa },
		{ name: 'Gimnasia', logo: gm },
		{ name: 'Futbol Americano', logo: fa },
		{ name: 'Skate', logo: sk },
		{ name: 'Balonmano', logo: bm },
		{ name: 'MotoGP', logo: mo },
		{ name: 'Ultimate Frisbee', logo: fr },
		{ name: 'Ajedrez', logo: aj }
	];

	let searchValue = '';
	let sidebarHidden = false;
	let activeMenuItem = 'panel';

	$: filteredDeportes = deportes.filter((deporte) =>
		deporte.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	function toggleSidebar() {
		sidebarHidden = !sidebarHidden;
	}

	function setActiveMenuItem(menuItem: string) {
		activeMenuItem = menuItem;
	}
</script>

<svelte:head>
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>

<div class="dashboard" data-sveltekit-preload-data="tap" data-sveltekit-reload>
	<Sidebar {sidebarHidden} {activeMenuItem} {setActiveMenuItem} />

	<section id="content" class:sidebar-hidden={sidebarHidden}>
		<Navbar {toggleSidebar} bind:searchValue />

		<main>
			<div class="head-title">
				<div class="left">
					<h1>TABLA DE BUSQUEDAS</h1>
					<ul class="breadcrumb">
						<li>
							<a href="/empezar">BUSQUEDA</a>
						</li>
					</ul>
				</div>
			</div>

			<SportsList {filteredDeportes} />
		</main>
	</section>
</div>

<style>
	:root{
		--grey: #eee;
	}
    .dashboard {
        width: 100%;
        min-height: 100vh;
        background: #f5f5f5;
    }

    #content {
        position: relative;
        width: calc(100% - 280px);
        left: 280px;
        transition: .3s ease;
    }

    #content.sidebar-hidden {
        width: calc(100% - 60px);
        left: 60px;
    }

    main {
        width: 100%;
        padding: 36px 24px;
        max-width: 1440px;
        margin: 0 auto;
    }

    .head-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
    }

    .head-title h1 {
        font-size: 36px;
        font-weight: 600;
        color: #333;
        margin-bottom: 12px;
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        grid-gap: 16px;
		color: #eee;
    }

    .breadcrumb li {
        color: #eee;
    }

    .breadcrumb li a {
        color: #666;
        text-decoration: none;
    }
</style>