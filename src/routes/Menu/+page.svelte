<script>
	import Uno from '$lib/imagenes/Barca.png';
	import Dos from '$lib/imagenes/Bayern.png';
	import Tres from '$lib/imagenes/Juventus.png';
	import Cuatro from '$lib/imagenes/PSG.png';
	import Cinco from '$lib/imagenes/RealMadrid.png';
	import Seis from '$lib/imagenes/City.png';
	let currentSlide = $state(0);

	$effect(() => {
		const interval = setInterval(() => {
			currentSlide === 5 ? (currentSlide = 0) : (currentSlide += 1);
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	});

</script>

<header>
	<div class="container">
		<div class="container__header">
			<!--Contenedor de encabezado-->
			<div class="logo">
				<a href="l">
					<img src="LogoPag.jpg" alt="" />
				</a>
			</div>

			<div class="menu">
				<!--Contenedor de la barra nav o busqueda de temas-->
				<nav>
					<ul>
						<li><a href="#SobreNosotros">Sobre nosotros</a></li>
						<li><a href="#News">Noticias</a></li>
						<li><a href="#Contactanos">Contactanos</a></li>
					</ul>
				</nav>

				<a href="http://127.0.0.1:5500/Inicio%20de%20sesion%202/Index.html" class="btn__quote"
					>Volver</a
				>
			</div>
		</div>
	</div>
</header>

<main>
	<!--INICIO-->
	<!--Portada de inicio-->
	<div class="container__cover div__offset">
		<!--Contenedor de imagenes principales-->
		<div class="cover">
			<!--Contenedor de parrafo de imagenes y botones radius-->
			<section class="text__cover">
				<!--Contenedor de parrafo de texto-->
				<h1>Sport Scores. <br /> Estadísticas en todo momento.</h1>
				<p>
					Somos una página web deportiva que ofrece noticias, estadísticas y análisis de una gran
					variedad de deportes y ligas alrededor del mundo. Además, promovemos e insentivamos el
					conocimiento del deporte, sus beneficios y todo aquello que se debe conocer de este
					increíble mundo. Esto con el objetivo de que posteriormente los usuarios que nos visiten
					se vean insentivados a realizar el deporte que más les guste.
				</p>
				<a href="l" class="btn__text-cover btn__text">Empezar</a>
			</section>
			<div id="slider">
				<!--Contenedor de botones radius y carrusel de imagenes-->
				<input type="radio" name="slider" id="s1" checked={currentSlide === 0} />
				<input type="radio" name="slider" id="s2" checked={currentSlide === 1}/>
				<input type="radio" name="slider" id="s3" checked={currentSlide === 2}/>
				<input type="radio" name="slider" id="s4" checked={currentSlide === 3}/>
				<input type="radio" name="slider" id="s5" checked={currentSlide === 4}/>
				<input type="radio" name="slider" id="s6" checked={currentSlide === 5}/>
				<label for="s1" id="slide1">
					<img src={Uno} alt="" />
				</label>
	
				<label for="s2" id="slide2">
					<img src={Dos} alt="" />
				</label>
	
				<label for="s3" id="slide3">
					<img src={Tres} alt="" />
				</label>
	
				<label for="s4" id="slide4">
					<img src={Cuatro} alt="" />
				</label>
	
				<label for="s5" id="slide5">
					<img src={Cinco} alt="" />
				</label>
				<label for="s6" id="slide5">
					<img src={Seis} alt="" />
				</label>
			</div>
		</div>
		<div class="container__about div__offset" id="SobreNosotros">
			<!--Contenedor general sobre nosotros-->
			<div class="about">
				<!--Contenedor sobre nosotros-->
				<div class="text__about">
					<!--Contenedor de texto y patrafo-->
					<h1>Sobre nosotros</h1>
					<p>
						Somos un grupo de estudiantes apasionados por la programación y el deporte, por esto
						hemos querido fucionar nuestras habilidades y nuestros gustos para así promover la
						realización del deporte, sin olvidar también la incentivación al adquirir un
						conocimiento sobre este mundo tan basto.
						<br />

						Creemos que el deporte es una fuente de alegría, emoción y unión, y queremos compartir
						nuestra pasión con el mundo. Por eso, hemos creado este espacio donde podrás encontrar
						noticias actualizadas, resultados en vivo, estadísticas detalladas e historia a
						profundidad sobre tus deportes favoritos.
					</p>
					<a href="l" class="btn__text-about btn__text">Saber Más</a>
				</div>

				<div class="image__about">
					<!--Contenedor de las imagenes que hacen parte del contenedir general-->
					<img src="ImagenCorredor.png" alt="" />
					<img src="ImagenCorredor2.png" alt="" />
				</div>
			</div>
		</div>

		<!--Servicios que brindamos-->

		<div class="container__service container__card-primary div__offset" id="News">
			<!--Contenedor General de diarios deportivos actualizados-->
			<div class="service card__primary">
				<!--Contenedor de cards, cuenta con el card primary para ser identica a las cards anteriores-->
				<div class="text__service text__card-primary">
					<!--Contenedor de card de forma individual, en este caso la card #1-->
					<p>¿Quieres conocer más sobre el mundo deportivo?</p>
					<h1>
						Visita estos increibles diarios deportivos que cubren la información del mundo deportivo
						a nivel internacional
					</h1>
				</div>

				<div class="container__card-service container__box-cardPrimary">
					<div class="card__service box__card-primary">
						<h2>Diario AS</h2>
						<a href="https://colombia.as.com/"
							><p>
								Es un periódico deportivo español, Se caracteriza por su amplia cobertura del
								fútbol, tanto nacional como internacional.
							</p></a
						>
						<a href="https://colombia.as.com/"><i class="fa-solid fa-arrow-right"></i></a>
					</div>
					<div class="card__service box__card-primary">
						<img src="LogoESPN.png" alt="" />
						<h2>ESPN</h2>
						<a href="https://www.espn.com.co/"
							><p>
								Es un periódico deportivo español, Se caracteriza por su amplia cobertura del
								fútbol, tanto nacional como internacional.
							</p></a
						>
						<a href="https://www.espn.com.co/"><i class="fa-solid fa-arrow-right"></i></a>
					</div>
					<div class="card__service box__card-primary">
						<img src="LogoL'equipe.png" alt="" />
						<h2>Diario L'Equipe</h2>
						<a href="https://www.lequipe.fr/"
							><p>
								Es un periódico deportivo español, Se caracteriza por su amplia cobertura del
								fútbol, tanto nacional como internacional.
							</p></a
						>
						<a href="https://www.lequipe.fr/"><i class="fa-solid fa-arrow-right"></i></a>
					</div>
					<div class="card__service box__card-primary">
						<img src="LogoSport.jpg" alt="" />
						<h2>Diario Sport</h2>
						<a href="https://www.sport.es/co/"
							><p>
								Es un periódico deportivo español, Se caracteriza por su amplia cobertura del
								fútbol, tanto nacional como internacional.
							</p></a
						>
						<a href="https://www.sport.es/co/"><i class="fa-solid fa-arrow-right"></i></a>
					</div>
					<div class="card__service box__card-primary">
						<img src="LogoM.jpg" alt="" />
						<h2>Diario Marca</h2>
						<a href="https://www.marca.com/"
							><p>
								Es un periódico deportivo español, Se caracteriza por su amplia cobertura del
								fútbol, tanto nacional como internacional.
							</p></a
						>
						<a href="https://www.marca.com/"><i class="fa-solid fa-arrow-right"></i></a>
					</div>
					<div class="card__service box__card-primary">
						<img src="LogoMD.png" alt="" />
						<h2>Diario Mundo Deportivo</h2>
						<a href="https://www.mundodeportivo.com/"
							><p>
								Es un periódico deportivo español, Se caracteriza por su amplia cobertura del
								fútbol, tanto nacional como internacional.
							</p></a
						>
						<a href="https://www.mundodeportivo.com/"><i class="fa-solid fa-arrow-right"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
<!--fin de contenido principal-->
<footer>
	<div class="container__footer" id="Contactanos">
		<!--Contenedor general del pie de pagina-->
		<div class="box__footer">
			<!--Contenedor de el logo y breve resumen sobre nosotros-->
			<div class="logo">
				<!--Contenedor del logo-->
				<img src="LogoPag.jpg" alt="" />
			</div>
			<div class="terms">
				<!--Contenedor de texto-->
				<p>
					En SS somos un equipo de apasionados por el deporte que creemos en el poder que este tiene
					para unir a las personas y crear momentos inolvidables.
					<br />

					Nuestra misión es brindar a los fanáticos del deporte una plataforma completa y confiable
					donde puedan encontrar toda la información que necesitan para estar al día con sus equipos
					y jugadores favoritos.
				</p>
			</div>
		</div>
		<div class="box__footer">
			<!--Contenedor de temas que los usuarios pueden explorar-->
			<h2>Deportes</h2>
			<a href="https://www.espn.com.co/futbol/">Futbol</a>
			<a href="https://www.fia.com/es/la-fia">Formula 1</a>
			<a href="https://www.nba.com/">Basquetbol</a>
			<a href="https://www.google.com/search?q=Tenis+deporte&sca_esv=c3c64dbb89e05100&sxsrf"
				>Tenis</a
			>
		</div>

		<div class="box__footer">
			<!--Contenedor de acerca de nuestras funciones como compañia-->
			<h2>Compañia</h2>
			<a href="l">Acerca de</a>
			<a href="l">Trabajos</a>
			<a href="l">Procesos</a>
			<a href="l">Servicios</a>
		</div>

		<div class="box__footer">
			<!--Contenedor de nuestros contactos-->
			<h2>Redes Sociales</h2>
			<a href="l"><i class="fab fa-facebook-square"></i> Facebook</a>
			<a href="l"><i class="fa-brands fa-tiktok"></i> Tik Tok</a>
			<a href="l"><i class="fab fa-instagram-square"></i> Instagram</a>
		</div>
	</div>

	<div class="box__copyright">
		<hr />
		<p>Todos los derechos reservados © 2024 <b>Sport Scores</b></p>
	</div>
</footer>

