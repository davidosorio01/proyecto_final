<script>
    import '$lib/CSS/futbol_card/futbol1.css';
    import trofeos from '$lib/IMAGES/images_futbol/Trofeos.png';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import messi from '$lib/IMAGES/images_futbol/Mess.jpeg';
    import pele from '$lib/IMAGES/images_futbol/Pelé.jpg';
    import cr7 from '$lib/IMAGES/images_futbol/Cr7.webp';
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
</script>

<header>
    <div class="menu-container">
        <nav>
            <img src={LogoPagina} alt="Logo de la página" class="logo" />
            <div class="lesson">Historia del fútbol</div>

            <div class="nav-item" id="nav-item-1">
                <div class="progress-bar" id="progress-bar">
                    <div class="rombo" id="rombo-1"><span class="numero"></span></div>
                    <div class="square" id="square-1"><span class="numero-2">2</span></div>
                    <div class="rombo" id="rombo-2"><span class="numero"></span></div>
                    <div class="circle" id="circle-2"><span class="numero"></span></div>
                </div>
            </div>
            <BotonVolver/>
        </nav>
    </div>
</header>

<div class="container">  
    <div class="text">  
        <h1>El Futbol a través del tiempo</h1>  
        <hr>  
        <p>  
            A lo largo del siglo XX, el fútbol ganó popularidad global, destacándose la creación de la Copa Mundial de la FIFA en 1930 como un hito clave. Este torneo ha crecido en prestigio, uniendo a naciones cada cuatro años. El fútbol se ha convertido en un <strong>fenómeno cultural</strong> que trasciende fronteras, y con la expansión de la televisión e internet, millones de personas pueden disfrutar de los partidos, lo que ha impulsado aún más su popularidad.  
        </p>  
        <p>  
            Hoy en día, el fútbol es indiscutiblemente <strong>el deporte más importante del mundo.</strong> Con más de 4 mil millones de aficionados, sus eventos son seguidos globalmente. Las ligas más importantes, como la Premier League, La Liga y la Serie A, cuentan con un alto nivel de competencia y talento, atrayendo a los mejores jugadores del planeta.

            El fútbol no solo se limita al juego en sí; es un motor económico que genera miles de millones de dólares, incluyendo derechos de televisión, patrocinios y merchandising. Además, su impacto social es significativo, promoviendo la paz y la unidad en diversas comunidades y países.
        </p>  
        <p>  
            El fútbol también ha sido una plataforma para el cambio social. Los grandes clubes y sus jugadores utilizan su influencia para abordar problemas sociales, desde la igualdad de género hasta la lucha contra el racismo. Iniciativas como la "FIFA Foundation" y campañas de concienciación han utilizado el poder del deporte para hacer del mundo un <strong>lugar mejor.</strong>  
        </p>  
        <p>
            En definitiva, el fútbol es más que un deporte; es una pasión que une a personas de todos los continentes, clases sociales y edades. Con su historia rica en emociones, sus estrellas que inspiran a millones y su capacidad para generar momentos inolvidables, el fútbol ha conquistado el corazón del mundo y sigue evolucionando, manteniendo su relevancia a lo largo de las generaciones.
        </p>  
    </div>  
    <div class="image">  
        <img src={trofeos} alt="Trofeos" />  
        <p>Trofeos más icónicos en el mundo del fútbol</p>  
    </div>  
</div>

<div class="timeline-container">  
    <h1>Torneos más importantes en el mundo</h1>  
    <hr>  
    <div class="timeline">  
        <div class="timeline-event">  
            <div class="timeline-date">1930 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Copa Mundial de la FIFA</h2>  
                <p>La Copa Mundial de la FIFA es el torneo de selecciones más importante, realizado cada cuatro años desde 1930. Reúne a equipos de todo el mundo en una competencia que trasciende el deporte y celebra la unidad global, cautivando a millones de fanáticos.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1955 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Champions League</h2>  
                <p>La UEFA Champions League es la principal competición de clubes de Europa, donde los mejores equipos del continente se enfrentan anualmente para obtener el prestigioso trofeo, consolidándose como un evento de gran renombre global.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1888 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Premier League</h2>  
                <p>La Premier League es la máxima liga de Inglaterra, conocida por su competitividad y amplio seguimiento mundial; cuenta con equipos históricos y gran atractivo internacional desde su modernización en 1992.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1960 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Copa Libertadores</h2>  
                <p>La Copa Libertadores de América es el torneo más importante de Sudamérica, donde los clubes compiten intensamente por el título que otorga gloria continental.</p>  
            </div>  
        </div>  
    </div>  
</div>

<div class="art-container">
    <h2>Los mejores jugadores en la historia del deporte</h2>
    <br>
    <div class="conlist">
        <div class="jugadores">
            <div class="card">
                <div class="player">
                    <img src={messi} alt="Messi">
                </div>
                <div class="intro">
                    <h1>¿Quién es Messi?</h1>
                    <p>
                        Lionel Messi se destaca como el mejor jugador en la historia del fútbol debido a su combinación única de talento, consistencia y logros. Ha ganado 8 Balones de Oro.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={cr7} alt="Cristiano">
                </div>
                <div class="intro">
                    <h1>¿Quién es Cristiano?</h1>
                    <p>
                        Cristiano Ronaldo es uno de los mejores futbolistas en la historia gracias a su impresionante récord de goles y títulos. Ha ganado 5 Balones de Oro.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={pele} alt="Pelé">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Pelé?</h1>
                    <p>
                        Pelé, el "Rey del Fútbol", es una leyenda por su extraordinaria habilidad, visión de juego y récords históricos. Ganó tres Copas Mundiales con Brasil.
                    </p>
                </div>
            </div>
        </div>
        <a href="/futbol/futbol2" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>
