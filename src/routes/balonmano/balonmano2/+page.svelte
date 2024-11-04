<script lang="ts">
	import { onMount } from 'svelte';
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol2.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import partido from '$lib/IMAGES/images_balonmano/PartidoBalonmano.png'
	import IHFbalonmano from '$lib/IMAGES/images_balonmano/IHFbalonmano.png'
	import BalonmanoEuropa from '$lib/IMAGES/images_balonmano/BalonmanoEuropa.png'
	import BalonmanoOlimpico from '$lib/IMAGES/images_balonmano/BalonmanoOlimpico.png'
	import EHFchampions from '$lib/IMAGES/images_balonmano/EHFchampions.png'
	import PanamericanoBalonmano from '$lib/IMAGES/images_balonmano/PanamericanoBalonmano.png'
	import Francia from '$lib/IMAGES/images_balonmano/Francia.png'

	let currentSlide = 0;

	type SlideContent = {
		imgSrc: string;
		text: string;
	};

	const slidesContent: SlideContent[] = [
		{
			imgSrc: partido,
			text: 'El balonmano, <strong>más allá de ser un simple deporte</strong>, actúa como un potente motor de cambio social. Sus impactos positivos se pueden observar en diversas áreas que contribuyen al bienestar de las comunidades y a la cohesión social. A medida que el deporte sigue creciendo a nivel mundial, vamos a visualizar los torneos que, además de considerarse los más emocionantes, <strong>tienen grandes repercusiones en la sociedad</strong>.'
		},
		{
			imgSrc: IHFbalonmano,
			text: '<strong>El Campeonato Mundial de Balonmano de la IHF</strong> es el torneo internacional de balonmano más prestigioso, celebrado cada dos años desde su primera edición en 1938. La última edición tuvo lugar en Egipto en 2021, marcando el 27º Campeonato Mundial de Balonmano. Los máximos ganadores de este trofeo en la categoría masculina son Francia, con 6 títulos, seguida de Suecia y Rumania, con 4 cada uno. <strong>Francia es una de las selecciones más dominantes</strong> en la historia del torneo, destacándose por su consistencia y éxito en las últimas décadas.'
		},
		{
			imgSrc: BalonmanoEuropa,
			text: '<strong>El Campeonato Europeo de Balonmano</strong> es uno de los torneos de balonmano más prestigiosos a nivel mundial, en el que participan selecciones nacionales europeas. Organizado por la EHF, se celebra cada dos años desde 1994. El torneo ha crecido con el tiempo en relevancia y en participantes, <strong>ampliándose en 2020 a 24 selecciones</strong>, lo cual permitió que más países tuvieran la oportunidad de competir.'
		},
		{
			imgSrc: BalonmanoOlimpico,
			text: '<strong>Los Juegos Olímpicos</strong> introducieron el balonmano en 1972 para los hombres. Equipos como Dinamarca, Francia y Rusia han dejado su huella en la historia del balonmano olímpico, con múltiples títulos y actuaciones memorables. Los Juegos Olímpicos son uno de los <strong>eventos deportivos más vistos en el mundo,</strong> con millones de espectadores sintonizando cada edición.'
		},
		{
			imgSrc: EHFchampions,
			text: '<strong>La EHF Champions League</strong> es la liga de balonmano de clubes más prestigiosa de Europa. Fundada en 1993, enfrenta a los mejores equipos de las ligas europeas en una temporada llena de intensidad y talento. Equipos icónicos como el FC Barcelona y THW Kiel participan en este torneo, convirtiéndola en una de las competiciones de balonmano <strong>más vistas y prestigiosas del planeta.</strong>'
		},
		{
			imgSrc: PanamericanoBalonmano,
			text: '<strong>El Campeonato Panamericano de Balonmano</strong> fue el torneo de selecciones nacionales más importante de América. Desde 1980, enfrentaba a los mejores equipos de la región, distinguiéndose por su intensidad, pasión y rivalidades. Era el equivalente en el continente americano al Campeonato Europeo de Balonmano.'
		},
		{
			imgSrc: Francia,
			text: '<strong>Francia tiene una historia rica en el balonmano;</strong> es una potencia constante en el balonmano, habiendo producido a algunos de los mejores jugadores como Nikola Karabatic, Thierry Omeyer, Luc Abalo, Didier Dinart, y Jackson Richardson. Este país es un orgullo nacional en el deporte.'
		}
	];

	let slides: HTMLElement[] = [];

	function showSlide(n: number): void {
		if (!slides.length) return;
		slides.forEach((slide, index) => {
			slide.style.opacity = index === n ? '1' : '0';
			slide.classList.toggle('active', index === n);
		});
	}

	function plusSlides(n: number): void {
		currentSlide = (currentSlide + n + slides.length) % slides.length;
		showSlide(currentSlide);
	}

	onMount(() => {
		slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
		showSlide(currentSlide);
	});
</script>

<div>
	<!-- Pantalla de carga -->
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<!-- Encabezado -->
	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="Logo de la página" class="logo" />
				<div class="lesson">Historia del Balonmano</div>

				<!-- Barra de progreso -->
				<div class="nav-item" id="nav-item-1">
					<div class="progress-bar" id="progress-bar">
						<div class="rombo" id="rombo-1"><span class="numero"></span></div>
						<div class="square" id="square-1"><span class="numero-2"></span></div>
						<div class="rombo" id="rombo-2"><span class="numero">3</span></div>
						<div class="circle" id="circle-2"><span class="numero"></span></div>
					</div>
				</div>
				<BotonVolver />
			</nav>
		</div>
		<div class="level-info" id="level-info"></div>
	</header>

	<!-- Contenedor principal -->
	<div class="container">
		<div class="slider-container">
			{#each slidesContent as slide}
				<div class="slide">
					<img src={slide.imgSrc} class="slide-img" alt="" />
					<div class="text-overlay">
						<p>{@html slide.text}</p>
					</div>
				</div>
			{/each}

			<!-- Botones de navegación -->
			<button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
			<button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
		</div>

		<!-- Botón para proceder a la siguiente sección -->
		<a href="/balonmano/balonmano3" data-sveltekit-reload data-sveltekit-preload-data="tap">
			<button class="next svelte-zonnq2">
				<span class="arrow svelte-zonnq2"></span>
			</button>
		</a>
	</div>
</div>
