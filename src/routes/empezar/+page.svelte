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
	import mo from '$lib/IMAGES/images_empezar/MotoGp.png';
	import na from '$lib/IMAGES/images_empezar/Natación.webp';
	import pa from '$lib/IMAGES/images_empezar/PatinajeArtistico.png';
	import rg from '$lib/IMAGES/images_empezar/Rugby.png';
	import sk from '$lib/IMAGES/images_empezar/Skate.png';

	const deportes = [
		{ name: 'Futbol', logo: fb, href: '/futbol'},
		{ name: 'Baloncesto', logo: bs, href: '/baloncesto'},
		{ name: 'Béisbol', logo: be, href: '/empezar'},
		{ name: 'Golf', logo: gf, href: '/empezar' },
		{ name: 'Ciclismo', logo: cy, href: '/empezar' },
		{ name: 'Natación', logo: na, href: '/empezar' },
		{ name: 'Atletismo', logo: at, href: '/empezar' },
		{ name: 'Rugby', logo: rg, href: '/empezar' },
		{ name: 'Fórmula 1', logo: fi, href: '/formula1' },
		{ name: 'Hockey', logo: ho, href: '/empezar' },
		{ name: 'Boxeo', logo: bx, href: '/empezar' },
		{ name: 'Artes marciales mixtas', logo: ar, href: '/empezar' },
		{ name: 'Cricket', logo: cr, href: '/empezar' },
		{ name: 'Badminton', logo: ba, href: '/empezar' },
		{ name: 'Lacrosse', logo: la, href: '/empezar' },
		{ name: 'Billar', logo: bi, href: '/empezar' },
		{ name: 'Esgrima', logo: es, href: '/empezar' },
		{ name: 'Patinaje artístico', logo: pa, href: '/empezar' },
		{ name: 'Gimnasia', logo: gm, href: '/empezar' },
		{ name: 'Futbol Americano', logo: fa, href: '/empezar' },
		{ name: 'Skate', logo: sk, href: '/stake' },
		{ name: 'Balonmano', logo: bm, href: '/balonmano' },
		{ name: 'MotoGP', logo: mo, href: '/motociclismo' },
		{ name: 'Ultimate Frisbee', logo: fr, href: '/empezar' },
		{ name: 'Ajedrez', logo: aj, href: '/empezar' }
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