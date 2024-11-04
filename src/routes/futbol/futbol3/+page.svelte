<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol3.css';
	import vs from '$lib/IMAGES/images_futbol/1 vs 1.webp';
	import camisa from '$lib/IMAGES/images_futbol/Camisa.png';
	import pregunta from '$lib/IMAGES/images_futbol/Pregunta.webp';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del futbol</div>
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
			<h1>¡Pon a prueba tu conocimiento y diviertete¡</h1>
		</div>
		<div class="video-container">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/ijJ0OZuII1I?si=yem312fIK8VXbOvC"
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
				<img src={camisa} alt="" />
				<h3>wordwall</h3>
			</div>
			<div class="face back">
				<h3>Camisetas de futbol</h3>
				<p>
					En este juego tendras que escoger el nombre del club al cual pertenecen las camisetas que
					te mostraran en pantalla. ¡Demuestra toda tu destresa y conocimientos acerca del futbol!
				</p>
				<div class="link">
					<a href="https://wordwall.net/es/resource/3088436/camisetas-de-futbol">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={pregunta} alt="" />
				<h3>Celebriti</h3>
			</div>
			<div class="face back">
				<h3>Preguntas de cultura futbolistica</h3>
				<p>
					¿Te consideras un genio en cultura futbolistica? Prueba tus conocimientos con estas
					preguntas y demuestra todo lo que sabes a través de conocimientos generales.
				</p>
				<div class="link">
					<a href="https://www.cerebriti.com/juegos-de-deportes/preguntas-sobre-futbol">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={vs} alt="" />
				<h3>Pokki</h3>
			</div>
			<div class="face back">
				<h3>Simulador 1 vs 1</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Llama a un amigo para que simulen un 1 vs 1. También puedes jugar solo si así
					deseas.
				</p>
				<div class="link">
					<a href="https://poki.com/es/g/heads-arena-soccer-all-stars">Jugar</a>
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
