<script lang="ts">
    export let filteredDeportes: Array<{ name: string, logo: string, href: string }>;
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

    //el ejemplo de iteracion esta en notas
    const cards = [
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

    filteredDeportes = cards; // Asignamos la lista de ejemplo a filteredDeportes
</script>

<div class="box-info" id="sports-container">
    {#each filteredDeportes as deporte}
        <a href={deporte.href}> 
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