<script>
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
	import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import trofeos from '$lib/IMAGES/images_motociclismo/TrofeosMOTOGP.png';
	import MarcMarquez from '$lib/IMAGES/images_motociclismo/MarcMarquez.jpg';
	import ValentinoRossi from '$lib/IMAGES/images_motociclismo/ValentinoRossi.webp';
	import GiacomoAgostini from '$lib/IMAGES/images_motociclismo/GiacomoAgostini.jpg';
</script>

<header>
	<div class="menu-container">
		<nav>
			<img src={LogoPagina} alt="" class="logo" />
			<div class="lesson">Historia del motociclismo</div>
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
		<h1>El Motociclismo a través del tiempo</h1>
		<hr />
		<p>
			A lo largo del siglo XX, el motociclismo se consolidó como uno de los deportes de motor más
			emocionantes y populares. La creación de competiciones oficiales como el Campeonato Mundial de
			Motociclismo en 1949 marcó un punto clave, permitiendo que pilotos de todo el mundo
			compitieran en pistas icónicas. Este deporte ha evolucionado significativamente,
			convirtiéndose en un <strong>espectáculo global</strong> que atrae a millones de aficionados a
			seguir cada carrera y apoyar a sus pilotos favoritos.
		</p>
		<p>
			Hoy en día, el motociclismo es considerado uno de los deportes de motor más importantes. Con
			eventos destacados como MotoGP, Superbike y el icónico Rally Dakar, el motociclismo combina
			velocidad, habilidad y pasión. Estas competiciones cuentan con una base de seguidores fieles y
			creciente en todo el mundo, y algunos de los pilotos, como Valentino Rossi y Marc Márquez, se
			han convertido en leyendas que trascienden el deporte.
		</p>
		<p>
			El motociclismo también se ha convertido en una plataforma para el cambio social. Equipos,
			pilotos y organizaciones del deporte promueven campañas para mejorar la seguridad vial, el
			respeto al medio ambiente, y la igualdad de género. A través de iniciativas como "Two Wheels
			for Life" y proyectos de sostenibilidad, el motociclismo muestra cómo el deporte puede ser una
			fuerza positiva, ayudando a crear un <strong>mundo más seguro y consciente.</strong>
		</p>
	</div>
	<div class="image">
		<img src={trofeos} alt="" />
		<p>Trofeos más icónicos en el mundo del motoGP</p>
	</div>
</div>
<div class="timeline-container">
	<h1>Carreras más importantes en el mundo</h1>
	<hr />
	<div class="timeline">
		<div class="timeline-event">
			<div class="timeline-date">1930 - Actualidad</div>
			<div class="timeline-content">
				<h2>Gran Premio de Italia - Mugello</h2>
				<p>
					Celebrado en el circuito de Mugello, este Gran Premio es uno de los más emocionantes y
					cuenta con una gran tradición. La pista, conocida por sus largas rectas y curvas rápidas,
					es amada tanto por pilotos como por fanáticos. Además, el ambiente en Mugello, con miles
					de seguidores apasionados, es inigualable.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1955 - Actualidad</div>
			<div class="timeline-content">
				<h2>Gran Premio de Japón - Motegi</h2>
				<p>
					El Twin Ring Motegi es un circuito especial que combina una pista oval y una sección
					técnica. Este Gran Premio es fundamental en la temporada y es también una carrera clave
					para las marcas japonesas como Honda, Yamaha y Suzuki, que buscan el triunfo en casa.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1888 - Actualidad</div>
			<div class="timeline-content">
				<h2>Gran Premio de los Países Bajos - Assen</h2>
				<p>
					Conocido como "La Catedral" del motociclismo, el circuito de Assen ha sido parte del
					calendario de MotoGP desde 1949. La pista es famosa por su diseño único y sus cambios de
					dirección rápidos, y es especialmente apreciada tanto por pilotos como por aficionados.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1960 - Actualidad</div>
			<div class="timeline-content">
				<h2>Gran Premio de Australia - Phillip Island</h2>
				<p>
					Este circuito, ubicado cerca del océano, es uno de los más bellos y desafiantes de MotoGP.
					Phillip Island es conocido por su velocidad y por las condiciones climáticas cambiantes,
					lo que convierte cada carrera en un desafío emocionante.
				</p>
			</div>
		</div>

		<div class="timeline-event">
			<div class="timeline-date">1929 - Actualidad</div>
			<div class="timeline-content">
				<h2>Gran Premio de San Marino - Misano</h2>
				<p>
					El Misano World Circuit, dedicado a Marco Simoncelli, es un Gran Premio importante en la
					región italiana de Emilia-Romaña. Los pilotos italianos suelen destacar aquí, y la
					cercanía a la costa adriática hace de esta una cita especial y muy seguida por los
					aficionados.
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
					<img src={MarcMarquez} alt="Messi" />
				</div>
				<div class="intro">
					<h1>¿Quién es Marc Marquez?</h1>
					<p>
						El español Marc Márquez ha logrado 8 títulos mundiales, incluyendo 6 en la categoría
						reina de MotoGP.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={ValentinoRossi} alt="Cristiano" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Valentino Rossi?</h1>
					<p>
						Conocido como "Il Dottore", es uno de los pilotos más icónicos y queridos de MotoGP.
						Rossi ganó 9 títulos mundiales y acumuló 115 victorias en GP.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="player">
					<img src={GiacomoAgostini} alt="Pele" />
				</div>
				<div class="intro">
					<h1>¿Quién fue Giacomo Agostini?</h1>
					<p>
						Con un total de 15 títulos mundiales y 122 victorias en GP, el italiano es el piloto con
						más campeonatos en la historia del motociclismo.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<a href="/motociclismo/motociclismo2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">
	<button class="next svelte-zonnq2">
		<span class="arrow svelte-zonnq2"></span>
	</button>
</a>
