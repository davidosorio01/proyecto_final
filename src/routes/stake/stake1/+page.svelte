<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import TrofeoSLS from '$lib/IMAGES/images_stake/TrofeoSLS.png';
	import TonyHawk from '$lib/IMAGES/images_stake/TonyHawk.jpeg';
	import RodneyMullen from '$lib/IMAGES/images_stake/RodneyMullen.jpg';
	import NyjahHuston from '$lib/IMAGES/images_stake/NyjahHuston.jpeg';
</script>

<header>
	<div class="menu-container">
		<nav>
			<img src={LogoPagina} alt="" class="logo" />
			<div class="lesson">Historia del Skateboarding</div>
			<div class="nav-item" id="nav-item-1">
				<div class="progress-bar" id="progress-bar">
					<div class="rombo" id="rombo-1"><span class="numero"></span></div>
					<div class="square" id="square-1"><span class="numero-2">2</span></div>
					<div class="rombo" id="rombo-2"><span class="numero"></span></div>
					<div class="circle" id="circle-2"><span class="numero"></span></div>
				</div>
			</div>
			<BotonVolver />
		</nav>
	</div>
	<div class="level-info" id="level-info"></div>
</header>
<div class="container">
	<div class="text">
		<h1>El Skateboarding a través del tiempo</h1>
		<hr />
		<p>
			A lo largo del siglo XX, el skateboarding se desarrolló como una expresión de libertad y
			creatividad urbana, destacando la década de los 70 como un momento clave, cuando los primeros
			skaters comenzaron a practicar en piscinas vacías en California. Desde entonces, el
			skateboarding ha evolucionado y ganado una gran popularidad global, convirtiéndose en un <strong
				>fenómeno cultural</strong
			> que conecta a personas de distintas generaciones y regiones. Con el auge de las redes sociales
			y plataformas de video, millones de personas pueden disfrutar de increíbles trucos y competencias,
			lo que ha impulsado su popularidad y ha llevado a su inclusión en los Juegos Olímpicos de Tokio
			2020.
		</p>

		<p>
			Hoy en día, el skateboarding es indiscutiblemente <strong
				>uno de los deportes más influyentes del mundo.</strong
			> Con una comunidad diversa y en crecimiento, sus eventos y competencias son seguidos globalmente.
			Las ligas más importantes, como Street League Skateboarding (SLS) y X Games, cuentan con un alto
			nivel de competencia y talento, atrayendo a los mejores skaters del planeta. El skateboarding no
			solo se limita a trucos y maniobras; es una industria vibrante que genera miles de millones de
			dólares, incluyendo patrocinios, marcas de ropa, y productos especializados. Además, su impacto
			social es significativo, fomentando el sentido de comunidad y permitiendo a los jóvenes expresarse
			libremente a través del deporte.
		</p>

		<p>
			El skateboarding también ha sido una plataforma para el cambio social. Grandes figuras y
			equipos de skate utilizan su influencia para abordar problemas sociales, desde la inclusión
			hasta la conciencia ambiental. Iniciativas como "Skateistan" y campañas de apoyo comunitario
			han utilizado el poder del skate para inspirar y ayudar a jóvenes en todo el mundo, haciendo
			del skateboarding un <strong>vehículo de cambio positivo.</strong>
		</p>
	</div>
	<div class="image">
		<img src={TrofeoSLS} alt="" />
		<p>Trofeo más icónico en el mundo del Skate</p>
	</div>
</div>
<div class="timeline-container">
	<h1>Torneos más importantes en el mundo</h1>
	<hr />
	<div class="timeline">
		<div class="timeline-event">
			<div class="timeline-date">1930 - Actualidad</div>
			<div class="timeline-content">
				<h2>X Games</h2>
				<p>
					Desde 1995, los X Games de ESPN se han convertido en uno de los eventos de deportes
					extremos más prestigiosos. Con categorías de "Street" y "Vert," los X Games reúnen a
					algunos de los mejores skaters del mundo en busca de la victoria y reconocimiento.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1955 - Actualidad</div>
			<div class="timeline-content">
				<h2>treet League Skateboarding (SLS)</h2>
				<p>
					Fundada por el legendario skater Rob Dyrdek en 2010, SLS es una de las ligas más
					competitivas del mundo en skate street. Su formato único y los premios atractivos han
					hecho que sea un referente en la escena, atrayendo a los mejores skaters de cada
					continente.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1888 - Actualidad</div>
			<div class="timeline-content">
				<h2>Dew Tour</h2>
				<p>
					Organizado por Mountain Dew, el Dew Tour incluye categorías de street y park, y ha sido
					clave en la popularización del skate en la última década. Además de ser una competencia,
					el evento incluye experiencias culturales de skate y arte urbano.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1960 - Actualidad</div>
			<div class="timeline-content">
				<h2>Vans Park Series</h2>
				<p>
					Es el torneo internacional líder para la categoría de park (parques de skate), donde los
					skaters muestran sus habilidades en bowls y transiciones. Este evento destaca por la
					creatividad y el estilo fluido en la modalidad de park.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1929 - Actualidad</div>
			<div class="timeline-content">
				<h2>Juegos olímpicos</h2>
				<p>
					Desde su inclusión en Tokio 2020, el skateboarding se ha convertido en una disciplina
					olímpica, abriendo una nueva plataforma para el deporte en las modalidades de street y
					park. Esto ha dado al skateboarding una visibilidad mundial sin precedentes.
				</p>
			</div>
		</div>
	</div>
	<br /><br />
</div>
<div class="art-container">
	<h2>Los mejores skaters en la historia del deporte</h2>
	<br />
	<div class="conlist">
		<div class="jugadores">
			<div class="card">
				<div class="player">
					<img src={TonyHawk} alt="Messi" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Tony Hawk?</h1>
					<p>
						Tony es una leyenda viviente que popularizó el skateboarding en la cultura global. Con
						su histórico "900" y una impresionante carrera en vert.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={RodneyMullen} alt="Cristiano" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Rodney Mullen?</h1>
					<p>
						Reconocido como el “padre del street skate”, Rodney Mullen inventó una serie de trucos
						fundamentales que han moldeado el skate moderno.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={NyjahHuston} alt="Pele" />
				</div>
				<div class="intro">
					<h1>¿Quién es Nyjah Huston?</h1>
					<p>
						el skater más dominante en competiciones de street, ha ganado una gran cantidad de
						campeonatos y ha elevado el nivel de dificultad en el skate.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<a href="/stake/stake2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
	<button class="next svelte-zonnq2">
		<span class="arrow svelte-zonnq2"></span>
	</button>
</a>
