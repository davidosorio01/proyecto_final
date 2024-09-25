<script lang="ts">
	$effect(()=>{
		let currentSlide = 0; // Cambié $state por una variable normal ya que no es necesario usar $state aquí
	})
	
	const slides = [
	  { id: 's1', src: 'https://s.cafebazaar.ir/images/icons/com.muratos.learn_animals_english-75f51e2a-c295-439e-ba84-150cccc0a631_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize', alt: 'Tifo BvB' },
	  { id: 's2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1CXZSBHtOkRlQ3bqInOBq1uWkC2Hkg2r1jPnWNdxJVWxogK-uHfm8lYtSXWG21ssorY&usqp=CAU', alt: 'Tifo Liverpool' },
	  { id: 's3', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-rGM6v1OaKcmYiVxSo041p8F7kCLQoPVxIiy8GIGF2uRh6Fsbtui4lhz2MOB8PTgzo0&usqp=CAU', alt: 'Tifo Real Madrid' },
	  { id: 's4', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1cM3o_568GFtcC8wDT3xVQwNkKzsl9Goz3Sy_Ejav91UbNVCWVUqTa0WtDXsMb3C5ug&usqp=CAU', alt: 'Tifo Barcelona' },
	  { id: 's5', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgSaVP7h3hSN6rBp7N8uCy0g8gB9p50lJQE6iDZmbleXBBd-z64jZ3__Z9hZ95cativA&usqp=CAU', alt: 'Tifo PSG' },
	  { id: 's6', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Jt_ZOtn3aF_x_Y5YspWKdrPCqqkkIAMmWAiADpG-Wd8XzJ51r3sK53_5Q9C6D6pGgLg&usqp=CAU', alt: 'Tifo Juventus' }
	];
  
	function nextSlide() {
	  currentSlide = (currentSlide + 1) % slides.length;
	}
  
	function prevSlide() {
	  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}
  
  $effect(() => {
  // This will be recreated whenever `milliseconds` changes
  const interval = setInterval(nextSlide, 200);
  
  return () => {
  // if a callback is provided, it will run
  // a) immediately before the effect re-runs
  // b) when the component is destroyed
  clearInterval(interval);
  };
  });
	// Configuración de intervalo para avanzar automáticamente cada 3 segundos
</script>

<div id="carousel">
  <!-- Botón para ir a la imagen anterior -->
  <button class="prev" onclick={prevSlide}>‹</button>
 
  <!-- Imágenes del carrusel -->
  {#each slides as slide, index}
    <div class="slide {index === currentSlide ? 'active' : ''}">
      <img src={slide.src} alt={slide.alt} />
    </div>
  {/each}

  <!-- Botón para ir a la siguiente imagen -->
  <button class="next" onclick={nextSlide}>›</button>
</div>

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
				<input type="radio" name="slider" id="s1" checked />
				<input type="radio" name="slider" id="s2" />
				<input type="radio" name="slider" id="s3" />
				<input type="radio" name="slider" id="s4" />
				<input type="radio" name="slider" id="s5" />
				<input type="radio" name="slider" id="s6" />
				<label for="s1" id="slide1">
					<div class="buffer"></div>
					<img src="TifoBvB.jpg" alt="" />
				</label>
				<label for="s2" id="slide2"
					><!--El label es la clase del contenedor slide-->
					<div class="buffer"></div>
					<img src="TifoLiverpool.jpg" alt="" />
				</label>
				<label for="s3" id="slide3">
					<div class="buffer"></div>
					<img src="TifoMadrid.jpg" alt="" />
				</label>
				<label for="s4" id="slide4">
					<div class="buffer"></div>
					<img src="TifoMilan.webp" alt="" />
				</label>
				<label for="s5" id="slide5">
					<div class="buffer"></div>
					<img src="TifoPsg.jpg" alt="" />
				</label>
				<label for="s6" id="slide6">
					<div class="buffer"></div>
					<img src="Bayern.webp" alt="" />
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

<!-- Estilos -->
<style>
	#carousel {
	  position: relative;
	  width: 100%;
	  max-width: 600px;
	  margin: auto;
	  overflow: hidden;
	}
  
	.slide {
	  display: none;
	  position: absolute;
	  width: 100%;
	  transition: opacity 0.5s ease-in-out;
	}
  
	.slide.active {
	  display: block;
	}
  
	img {
	  width: 100%;
	  height: auto;
	}
  
	/* Botones de navegación */
	button {
	  position: absolute;
	  top: 50%;
	  transform: translateY(-50%);
	  background-color: rgba(0, 0, 0, 0.5);
	  border: none;
	  color: white;
	  font-size: 2rem;
	  padding: 0.5rem;
	  cursor: pointer;
	  z-index: 10;
	}
  
	.prev {
	  left: 10px;
	}
  
	.next {
	  right: 10px;
	}
  
	button:hover {
	  background-color: rgba(0, 0, 0, 0.8);
	}
  </style>
  