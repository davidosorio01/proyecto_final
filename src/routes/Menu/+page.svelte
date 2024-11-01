<script>
	import { onMount } from 'svelte';
	import barca from '$lib/IMAGES/Barca.png';
	import bayern from '$lib/IMAGES/Bayern.png';
	import city from '$lib/IMAGES/City.png';
	import juventus from '$lib/IMAGES/Juventus.png';
	import psg from '$lib/IMAGES/PSG.png';
	import real from '$lib/IMAGES/RealMadrid.png';
	import Corredor1 from '$lib/IMAGES/ImagenCorredor.png';
	import Corredor2 from '$lib/IMAGES/ImagenCorredor2.png';
	import ESPN from '$lib/IMAGES/LogoESPN.png';
	import AS from '$lib/IMAGES/LogoAs.png';
	import Lequipe from '$lib/IMAGES/LogoLequipe.png';
	import sports from '$lib/IMAGES/LogoSport.jpg';
	import M from '$lib/IMAGES/LogoM.jpg';
	import MD from '$lib/IMAGES/LogoMD.png';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import '$lib/CSS/Menu.css';
	import Swal from 'sweetalert2';

	// Función para mostrar el modal
	function showWelcomeModal() {
		// Verificar si el modal ya fue mostrado
		if (!localStorage.getItem('modalShown')) {
			Swal.fire({
				title: '¡Bienvenido!',
				text: 'Ya puedes disfrutar de nuestra página web. Recuerda que en 30 días, debes iniciar sesión de nuevo.',
				icon: 'success',
				confirmButtonText: 'Aceptar'
			}).then(() => {
				// Al confirmar, almacena en localStorage que se ha visto el modal
				localStorage.setItem('modalShown', 'true');
			});
		}
	}
	// Llamar a la función al iniciar el componente (cuando se monta)
	showWelcomeModal();

    // Función para mostrar el modal de inicio de sesión
    function showLoginModal() {
        Swal.fire({
            title: '¡Ya estás vinculado!',
            text: 'No necesitas iniciar sesión nuevamente.',
            icon: 'info',
            confirmButtonText: 'Continuar',
        });
    }

	let currentSlide = 0;
	const slides = [
		{ src: barca, alt: 'TifoBvB' },
		{ src: bayern, alt: 'TifoLiverpool' },
		{ src: city, alt: 'TifoMadrid' },
		{ src: juventus, alt: 'TifoMilan' },
		{ src: psg, alt: 'TifoPsg' },
		{ src: real, alt: 'Bayern' }
	];

	const diarios = [
		{ name: 'Diario AS', url: 'https://colombia.as.com/', logo: AS, newsIndex: 0 },
		{ name: 'ESPN', url: 'https://www.espn.com.co/', logo: ESPN, newsIndex: 1 },
		{ name: "Diario L'Equipe", url: 'https://www.lequipe.fr/', logo: Lequipe, newsIndex: 2 },
		{ name: 'Diario Sport', url: 'https://www.sport.es/co/', logo: sports, newsIndex: 3 },
		{ name: 'Diario Marca', url: 'https://www.marca.com/', logo: M, newsIndex: 4 },
		{
			name: 'Diario Mundo Deportivo',
			url: 'https://www.mundodeportivo.com/',
			logo: MD,
			newsIndex: 5
		}
	];

	const noticias = [
		{
			text: 'Es un periódico deportivo español, Se caracteriza por su amplia cobertura del fútbol, tanto nacional como internacional'
		},
		{
			text: 'El Diario ESPN es una publicación digital de la cadena deportiva ESPN que ofrece noticias, análisis y opiniones sobre una amplia variedad de deportes.'
		},
		{
			text: 'Es el diario deportivo líder en Francia. se caracteriza por su amplia cobertura del fútbol, pero también ofrece información detallada sobre tenis, ciclismo y deportes de motor.'
		},
		{
			text: 'Ofrece noticias de última hora, resultados en vivo, análisis profundos y entrevistas exclusivas sobre fútbol, motor, tenis y mucho más.'
		},
		{
			text: 'Marca ofrece noticias, resultados, estadísticas y análisis de una amplia gama de deportes, incluyendo fútbol, baloncesto, tenis, motor y ciclismo'
		},
		{
			text: 'Es uno de los diarios deportivos más antiguos y prestigiosos de España, conocido por su amplia cobertura sobre deportes como el futbol, el tenis, el baloncesto y el motor.'
		},
		{
			text: 'En SS somos un equipo de apasionados por el deporte que creemos en el poder que este tiene para unir a las personas y crear momentos inolvidables.'
		}
	];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	onMount(() => {
		const interval = setInterval(nextSlide, 2000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"></script>
</svelte:head>
<!-- Aquí va el resto de tu componente -->
<main>
	<header>
		<div class="container">
			<div class="container__header">
				<div class="logo" data-sveltekit-preload-data="tap" data-sveltekit-reload>
					<a href="/">
						<img src={LogoPagina} alt="Logo" />
					</a>
				</div>
				<div class="menu">
					<nav>
						<ul>
							<li><a href="#SobreNosotros">Sobre nosotros</a></li>
							<li><a href="#News">Noticias</a></li>
							<li><a href="#Contactanos">Contactanos</a></li>
						</ul>
					</nav>
					<a
						href="/"
						on:click|preventDefault={showLoginModal}
						class="btn__quote"
						data-sveltekit-preload-data="tap"
						data-sveltekit-reload>INICIAR SESIÓN</a
					>
				</div>
			</div>
		</div>
	</header>

	<div class="container__cover div__offset">
		<div class="cover">
			<section class="text__cover">
				<h1>Sport Scores. <br /> Estadísticas en todo momento.</h1>
				<p>
					Somos una página web deportiva que ofrece noticias, estadísticas y análisis de una gran
					variedad de deportes y ligas alrededor del mundo. Además, promovemos e incentivamos el
					conocimiento del deporte, sus beneficios y todo aquello que se debe conocer de este
					increíble mundo.
				</p>
				<a
					href="/empezar"
					class="btn__text-cover btn__text"
					data-sveltekit-preload-data="tap"
					data-sveltekit-reload>Empezar</a
				>
			</section>
			<div id="slider">
				{#each slides as slide, i}
					<input type="radio" name="slider" id="s{i + 1}" checked={currentSlide === i} />
				{/each}
				{#each slides as slide, i}
					<label for="s{i + 1}" id="slide{i + 1}">
						<div class="buffer"></div>
						<img src={slide.src} alt={slide.alt} />
					</label>
				{/each}
			</div>
		</div>
	</div>

	<div class="container__about div__offset" id="SobreNosotros">
		<div class="about">
			<div class="text__about" data-sveltekit-preload-data="tap">
				<h1>Sobre nosotros</h1>
				<p>
					Somos un grupo de estudiantes apasionados por la programación y el deporte, por esto hemos
					querido fusionar nuestras habilidades y nuestros gustos para así promover la realización
					del deporte, sin olvidar también la incentivación al adquirir un conocimiento sobre este
					mundo tan vasto.
				</p>
				<a href="/" class="btn__text-about btn__text">Saber Más</a>
			</div>
			<div class="image__about">
				<img src={Corredor1} alt="Corredor 1" />
				<img src={Corredor2} alt="Corredor 2" />
			</div>
		</div>
	</div>

	<div class="container__service container__card-primary div__offset" id="News">
		<div class="service card__primary">
			<div class="text__service text__card-primary">
				<p>¿Quieres conocer más sobre el mundo deportivo?</p>
				<h1>
					Visita estos increíbles diarios deportivos que cubren la información del mundo deportivo a
					nivel internacional
				</h1>
			</div>
			<div class="container__card-service container__box-cardPrimary">
				{#each diarios as diario}
					<div class="card__service box__card-primary">
						<img src={diario.logo} alt={diario.name} />
						<h2>{diario.name}</h2>
						<a href={diario.url}>
							<p>
								{noticias[diario.newsIndex].text}
							</p>
						</a>
						<a href={diario.url}><i class="fa-solid fa-arrow-right"></i></a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>

<footer>
	<div class="container__footer" id="Contactanos">
		<div class="box__footer">
			<div class="logo">
				<img src={LogoPagina} alt="Logo" />
			</div>
			<div class="terms">
				<p>
					En SS somos un equipo de apasionados por el deporte que creemos en el poder que este tiene
					para unir a las personas y crear momentos inolvidables. Nuestra misión es brindar a los
					fanáticos del deporte una plataforma completa y confiable donde puedan encontrar toda la
					información que necesitan para estar al día con sus equipos y jugadores favoritos.
				</p>
			</div>
		</div>
		<div class="box__footer">
			<h2>Deportes más vistos</h2>
			<a href="https://www.espn.com.co/futbol/">Futbol</a>
			<a href="https://www.fia.com/es/la-fia">Formula 1</a>
			<a href="https://www.nba.com/">Basquetbol</a>
			<a href="https://www.google.com/search?q=Tenis+deporte">Tenis</a>
		</div>
		<div class="box__footer">
			<!--Contenedor de nuestros contactos-->
			<h2>Redes Sociales</h2>
			<a href="https://x.com/sportscores2024"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
					/></svg
				> Twitter</a
			>
			<a href="https://www.tiktok.com/@sport.score"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
					/></svg
				>Tik Tok</a
			>
			<a href="https://www.instagram.com/sport_scores24/"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
					/></svg
				> Instagram</a
			>
		</div>
	</div>
	<div class="box__copyright">
		<hr />
		<p>Todos los derechos reservados © 2024 <b>Sport Scores</b></p>
	</div>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		font-family: 'Poppins', sans-serif;
	}

	:global(:root) {
		--color_text-primary: #c7c8c9;
		--color_text-secundary: #080606;
		--color_text-tertiary: #080606;
		--main_color-primary: #080606;
		--main_color-secundary: #b60f1d;
		--background-color: #fafbfe;
		--lowText_font_size: 16px;
		--text_size_title: 40px;
		--text_title_card: 24px;
		--text_title_cardv2: 20px;
		--text_paragraph: 18px;
		--box_shadow-primary: 0px 6px 50px -20px rgba(0, 0, 0, 0.2);
		--bgColor: rgb(255, 252, 241);
	}

	#slider {
		position: relative;
		width: 50%;
		height: 32vw;
		margin: 80px auto;
		transform-style: preserve-3d;
		perspective: 1400px;
	}

	#slider input[type='radio'] {
		position: relative;
		top: 108%;
		left: 50%;
		width: 18px;
		height: 18px;
		margin: 0 15px 0 0;
		transform: translateX(-83px);
		cursor: pointer;
		opacity: 0.4;
	}

	#slider input[type='radio']:nth-child(6) {
		margin-right: 0px;
	}

	#slider input[type='radio']:checked {
		opacity: 1;
	}

	#slider label,
	#slider label img {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-radius: 8px;
		border: 3px solid;
		font-size: 70px;
		font-weight: bold;
		cursor: pointer;
		transition: transform 600ms ease;
	}
</style>
