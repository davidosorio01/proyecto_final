<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import '$lib/CSS/futbol_card/futbol3.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import SkateQuestion from '$lib/IMAGES/images_stake/SkateQuestion.png'
    import ObstaculosSkate from '$lib/IMAGES/images_stake/ObstaculosSkate.png'
    import Skarepark2 from '$lib/IMAGES/images_stake/Skarepark2.webp'
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del Skateboarding</div>
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
				src="https://www.youtube.com/embed/yn-TfAzobDI?si=WhCwvccEMI3S2UZ7"
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
				<img src={SkateQuestion} alt="" />
				<h3>1001 juegos</h3>
			</div>
			<div class="face back">
				<h3>Simulador 1</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito, ¡este juego
					es para ti!. Juega un simulador de skate y esquiva todos los obstaculos posibles
				</p>
				<div class="link">
					<a href="https://wordwall.net/es/resource/3088436/camisetas-de-futbol">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={ObstaculosSkate} alt="" />
				<h3>wordwall</h3>
			</div>
			<div class="face back">
				<h3>Preguntas sobre el skate</h3>
				<p>
					¿Te consideras un genio en la cultura del skate? Prueba tus conocimientos con estas
					preguntas y demuestra todo lo que sabes a través de conocimientos generales.
				</p>
				<div class="link">
					<a href="https://wordwall.net/resource/57005094/skateboarding">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={Skarepark2} alt="" />
				<h3>Poki</h3>
			</div>
			<div class="face back">
				<h3>Simulador 2</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito, ¡este juego
					es para ti!. Juega un simulador de skate y esquiva todos los obstaculos posibless
				</p>
				<div class="link">
					<a href="https://poki.com/es/g/skateboard-hero">Jugar</a>
				</div>
			</div>
		</div>
	</div>

	<a href="/empezar" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
		<button class="next svelte-zonnq2">
			<span class="arrow svelte-zonnq2"></span>
		</button>
	</a>
</div>
