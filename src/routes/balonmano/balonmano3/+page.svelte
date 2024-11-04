<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol3.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import EquipoHandball from '$lib/IMAGES/images_balonmano/EquipoHandball.png'
	import PreguntaHandball from '$lib/IMAGES/images_balonmano/PreguntaHandball.png'
	import EnfrentamientoHandBall from '$lib/IMAGES/images_balonmano/EnfrentamientoHandBall.png'
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del Balonmano</div>
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
				src="https://www.youtube.com/embed/RwFrIUpNbvU?si=ZGKrJ0c4zIITGdL4"
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
				<img src={EquipoHandball} alt="" />
				<h3>wordwall</h3>
			</div>
			<div class="face back">
				<h3>Reglas del Balonmano</h3>
				<p>
					En este juego tendras que escoger la opción correcta referente a preguntas acerca del
					reglamento del Balonmano. ¡Demuestra toda tu destresa y conocimientos acerca del
					Balonmano!
				</p>
				<div class="link">
					<a href="https://wordwall.net/es/resource/4845931/handball">Jugar</a>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={PreguntaHandball} alt="" />
				<h3>Educaplay</h3>
			</div>
			<div class="face back">
				<h3>Preguntas sobre el Balonmano</h3>
				<p>
					¿Te consideras un genio para el balonmano? Prueba tus conocimientos con estas preguntas y
					demuestra todo lo que sabes a través de conocimientos generales.
				</p>
				<div class="link">
					<a href="https://www.educaplay.com/printablegame/6095637-cuestionario_balonmano.html"
						>Jugar</a
					>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="face front">
				<img src={EnfrentamientoHandBall} alt="" />
				<h3>Quizziz</h3>
			</div>
			<div class="face back">
				<h3>Conocimientos adquiridos</h3>
				<p>
					Si quieres despejar la mente un rato, pero disfrutando de tu deporte favorito este juego
					es para ti. Retate a ti mismo a tus amigos a participar de un incríble Quizziz.
				</p>
				<div class="link">
					<a
						href="https://quizizz.com/signup/qdp?quizId=5b7ee735b8f6140019488d9f&ctaSource=use_activity_cta&fromPage=%2Fadmin%2Fquiz%2F5b7ee735b8f6140019488d9f%2Feducacion&action=use_activity"
						>Jugar</a
					>
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
