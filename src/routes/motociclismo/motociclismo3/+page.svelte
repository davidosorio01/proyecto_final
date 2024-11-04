<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol3.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import simulador1 from '$lib/IMAGES/images_motociclismo/Simulador1.png';
    import simulador2 from '$lib/IMAGES/images_motociclismo/Simulador2.png';
    import preguntas from '$lib/IMAGES/images_motociclismo/Preguntasmoto.png';
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del Motociclismo</div>
				<div class="nav-item" id="nav-item-1">
					<div class="progress-bar" id="progress-bar">
						<div class="rombo" id="rombo-1"><span class="numero"></span></div>
						<div class="square" id="square-1"><span class="numero-2"></span></div>
						<div class="rombo" id="rombo-2"><span class="numero"></span></div>
						<div class="circle" id="circle-2"><span class="numero">4</span></div>
					</div>
				</div>
				<BotonVolver />
			</nav>
		</div>
		<div class="level-info" id="level-info"></div>
	</header>

	<div class="container">
		<div class="header">
			<h1>¡Pon a prueba tu conocimiento y diviertete!</h1>
		</div>
		<div class="video-container">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/-8PTXMCKFEk?si=TLuGdNC4oEye6HLe"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>
	<br />
	<hr />

	<div class="sport-container">
		<h2>Aquí tienes algunos juegos en la red, te invitamos a que midas tu conocimiento.</h2>

		<div class="card">
			<div class="face front">
				<img src={simulador1} alt="" />
				<h3>1001 Juegos</h3>
			</div>
			<div class="face back">
				<h3>Simulador 1</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Compite en los juegos extremos y avanza por el mapa.
				</p>
				<div class="link">
					<a href="https://www.1001juegos.com/juego/moto-x3m">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={preguntas} alt="" />
				<h3>Celebriti</h3>
			</div>
			<div class="face back">
				<h3>Marcas de Motos</h3>
				<p>
					¿Te consideras un genio en cultura Biker? Prueba tus conocimientos con estas preguntas y
					demuestra todo lo que sabes a través de conocimientos generales.
				</p>
				<div class="link">
					<a href="https://www.cerebriti.com/juegos-de-motor/adivina-las-marcas-de-las-motos"
						>Jugar</a
					>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={simulador2} alt="" />
				<h3>Poki</h3>
			</div>
			<div class="face back">
				<h3>Simulador 2</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Compite en los Gran Prix y avanza por el mapa.
				</p>
				<div class="link">
					<a href="https://poki.com/es/g/super-bike-the-champion">Jugar</a>
				</div>
			</div>
		</div>
	</div>

	<a
		href="/empezar"
		data-sveltekit-reload=""
		data-sveltekit-preload-data="tap"
	>
		<button class="next svelte-zonnq2">
			<span class="arrow svelte-zonnq2"></span>
		</button>
	</a>
</div>
