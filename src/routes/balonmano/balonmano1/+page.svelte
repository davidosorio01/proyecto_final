<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import Nikola from '$lib/IMAGES/images_balonmano/Nikola.jpg'
	import Talant from '$lib/IMAGES/images_balonmano/Talant.jpg'
	import Mikkel from '$lib/IMAGES/images_balonmano/Mikkel.png'
	import CampeonHandball from '$lib/IMAGES/images_balonmano/CampeonHandball.png'
</script>

<header>
	<div class="menu-container">
		<nav>
			<img src={LogoPagina} alt="" class="logo" />
			<div class="lesson">Historia del Balonmano</div>
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
		<h1>El Balonmano a través del tiempo</h1>
		<hr />
		<p>
			A lo largo del siglo XX, el balonmano ha crecido en popularidad, especialmente en Europa, con
			la creación de competiciones internacionales que han marcado hitos importantes. El Campeonato
			Mundial de Balonmano, establecido en 1936, ha sido fundamental para elevar el perfil de este
			deporte, reuniendo a selecciones de todo el mundo cada dos años y promoviendo el espíritu de
			competencia y camaradería.
		</p>
		<p>
			Hoy en día, el balonmano es considerado <strong
				>uno de los deportes más emocionantes y dinámicos del mundo.</strong
			> Con millones de aficionados, sus eventos atraen atención a nivel global. Ligas destacadas como
			la Bundesliga en Alemania, la Liga Asobal en España y la Liga Francesa son conocidas por su alto
			nivel de competencia y el talento de sus jugadores, lo que ha llevado al deporte a nuevas alturas.
		</p>
		<p>
			El balonmano no solo se centra en el juego; también es un importante motor económico que
			genera millones en ingresos a través de derechos de televisión, patrocinadores y
			merchandising. Su impacto social es notable, ya que fomenta la inclusión y el trabajo en
			equipo en diversas comunidades y países.
		</p>
		<p>
			Además, el balonmano ha servido como plataforma para el cambio social. Clubs prominentes y sus
			jugadores utilizan su influencia para abordar temas como la igualdad de género y la promoción
			de la diversidad. Iniciativas como "Handball for All" y diversas campañas de concienciación
			han demostrado cómo el deporte puede ser un poderoso instrumento para hacer del mundo un <strong
				>lugar más justo y solidario.</strong
			>
		</p>
	</div>
	<div class="image">
		<img src={CampeonHandball} alt="" />
		<p>Trofeos más icónicos en el mundo Balonmano</p>
	</div>
</div>
<div class="timeline-container">
	<h1>Torneos más importantes en el mundo</h1>
	<hr />
	<div class="timeline">
		<div class="timeline-event">
			<div class="timeline-date">1936 - Actualidad</div>
			<div class="timeline-content">
				<h2>Campeonato Mundial de Balonmano</h2>
				<p>
					El Campeonato Mundial de Balonmano se celebra cada dos años y reúne a las mejores
					selecciones del mundo en una competición que promueve el deporte y la camaradería
					internacional.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1956 - Actualidad</div>
			<div class="timeline-content">
				<h2>Juegos Olímpicos de Balonmano</h2>
				<p>
					El balonmano se incluyó en los Juegos Olímpicos de verano en 1972, y desde entonces se ha
					convertido en uno de los eventos más esperados, mostrando el talento de los mejores
					jugadores del mundo.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1946 - Actualidad</div>
			<div class="timeline-content">
				<h2>Liga de Balonmano de Alemania</h2>
				<p>
					La Bundesliga de Balonmano es una de las ligas más competitivas del mundo, conocida por su
					alto nivel de juego y la pasión de sus seguidores, destacando equipos históricos.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1985 - Actualidad</div>
			<div class="timeline-content">
				<h2>Copa de Europa de Balonmano</h2>
				<p>
					La Copa de Europa de Balonmano, conocida como la Liga de Campeones, reúne a los mejores
					clubes de Europa en una competencia anual, convirtiéndose en un evento destacado en el
					calendario deportivo.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1958 - Actualidad</div>
			<div class="timeline-content">
				<h2>Campeonato Europeo de Balonmano</h2>
				<p>
					El Campeonato Europeo de Balonmano es una de las competiciones más importantes de
					selecciones nacionales en Europa, celebrándose cada dos años y atrayendo a grandes
					talentos del balonmano.
				</p>
			</div>
		</div>
	</div>
	<br /><br />
</div>
<div class="art-container">
	<h2>Los mejores jugadores en la historia del deporte</h2>
	<br />
	<div class="conlist">
		<div class="jugadores">
			<div class="card">
				<div class="player">
					<img src={Nikola} alt="Messi" />
				</div>
				<div class="intro">
					<h1>¿Quién es Nikola Karabatic?</h1>
					<p>
						Reconocido como uno de los mejores jugadores de balonmano de todos los tiempos. Ha
						ganado tres medallas de oro en los Juegos Olímpicos.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={Talant} alt="Cristiano" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Talant Dujshebaev ?</h1>
					<p>
						Considerado uno de los mejores jugadores de balonmano de la historia. Tuvo una carrera
						destacada en la que ganó numerosos títulos.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={Mikkel} alt="Pele" />
				</div>
				<div class="intro">
					<h1>¿Quién es Mikkel Hansen?</h1>
					<p>
						Es uno de los jugadores más destacados y ha sido fundamental en el éxito de la selección
						danesa, que ganó el oro olímpico en 2016.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<a href="/balonmano/balonmano2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
	<button class="next svelte-zonnq2">
		<span class="arrow svelte-zonnq2"></span>
	</button>
</a>
