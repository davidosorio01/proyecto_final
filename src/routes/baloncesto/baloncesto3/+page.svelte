<script>
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol3.css';
    import LogoPagina  from '$lib/IMAGES/LogoPag.jpg';
	import balon_basquet from '$lib/IMAGES/images_baloncesto/BalonBasquet.png';
	import cuestion_nba from '$lib/IMAGES/images_baloncesto/CuestionNBA.png';
	import vs_basquet from '$lib/IMAGES/images_baloncesto/Basquet1VS1.png';
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del Baloncesto</div>
				<div class="nav-item" id="nav-item-1">
					<div class="progress-bar" id="progress-bar">
						<div class="rombo" id="rombo-1"><span class="numero"></span></div>
						<div class="square" id="square-1"><span class="numero-2"></span></div>
						<div class="rombo" id="rombo-2"><span class="numero"></span></div>
						<div class="circle" id="circle-2"><span class="numero">4</span></div>
					</div>
				</div>
				<BotonVolver/>
			</nav>
		</div>
		<div class="level-info" id="level-info"></div>
	</header>

	<div class="container">
		<div class="header">
			<h1>¡Pon a prueba tu conocimiento y diviertete¡</h1>
		</div>
		<div class="video-container">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/m2-H1z9uJgs?si=_VdlQxhwP2tJf0ug"
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
		<br />

		<div class="card">
			<div class="face front">
				<img src={balon_basquet} alt="" />
				<h3>wordwall</h3>
			</div>
			<div class="face back">
				<h3>Reglamento del Basquet</h3>
				<p>
					En este juego tendras que escoger la opción correcta respecto a preguntas acerca del
					reglamento del Baloncesto. ¡Demuestra toda tu destresa y conocimientos acerca del
					Baloncesto!
				</p>
				<div class="link">
					<a href="https://wordwall.net/es/resource/4550589/basquet-reglamento">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={cuestion_nba} alt="" />
				<h3>Celebriti</h3>
			</div>
			<div class="face back">
				<h3>Preguntas de cultura basquetbolista</h3>
				<p>
					¿Te consideras un genio en cultura basquetbolista? Prueba tus conocimientos con estas
					preguntas y demuestra todo lo que sabes a través de conocimientos generales.
				</p>
				<div class="link">
					<a href="https://www.cerebriti.com/juegos-de-deportes/baloncesto-">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={vs_basquet} alt="" />
				<h3>Poki</h3>
			</div>
			<div class="face back">
				<h3>Simulador 1 vs 1</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Llama a un amigo para que simulen un 1 vs 1. También puedes jugar solo si así
					deseas.
				</p>
				<div class="link">
					<a href="https://poki.com/es/g/basketball-stars">Jugar</a>
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
