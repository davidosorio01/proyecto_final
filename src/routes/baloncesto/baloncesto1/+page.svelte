<script>
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import '$lib/CSS/futbol_card/futbol1.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import trofeoNBA from '$lib/IMAGES/images_baloncesto/TrofeoNBA.png';
    import michaelJordan from '$lib/IMAGES/images_baloncesto/michaeljordan.jpg';
    import leBronJames from '$lib/IMAGES/images_baloncesto/LeBronJames.webp';
    import abdulJabbar from '$lib/IMAGES/images_baloncesto/AbdulJabbar.webp';
</script>

<header>
    <div class="menu-container">
        <nav>
            <img src={LogoPagina} alt="" class="logo" />
            <div class="lesson">Historia del Baloncesto</div>
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
    <div class="level-info" id="level-info"></div>
</header>

<div class="container">
    <div class="text">
        <h1>El Baloncesto a través del tiempo</h1>
        <hr />
        <p>
            <strong>El baloncesto</strong> fue inventado en 1891 por el Dr. James Naismith, un profesor de
            educación física canadiense, en Springfield, Massachusetts, Estados Unidos. Naismith creó el
            juego en
            <strong>respuesta a la necesidad de sus estudiantes de practicar un deporte de interior</strong>
            durante el invierno.
        </p>
        <p>
            En las primeras décadas del siglo XX, el baloncesto comenzó a expandirse gracias a ligas
            locales y a equipos profesionales. La fundación de la National Basketball League (NBL) en 1937
            y posteriormente la Basketball Association of America (BAA) en 1946 marcaron el inicio de la
            profesionalización. En 1949, ambas ligas se fusionaron para formar la National Basketball
            Association (NBA), estableciendo una liga única y oficial en Estados Unidos. Durante las
            décadas de 1970 y 1980, el baloncesto profesional empezó a consolidarse como <strong
                >fenómeno cultural, sobre todo en Estados Unidos.</strong
            > La llegada de jugadores como Magic Johnson y Larry Bird no solo impulsó el nivel de competencia,
            sino que también contribuyó a mejorar la imagen pública de la liga, tras una serie de problemas
            financieros y de reputación.
        </p>
        <p>
            En 1984, Michael Jordan ingresó a la NBA, y su talento sin precedentes revolucionó el juego. <strong
                >Jordan se convirtió en una figura mundial y popularizó el baloncesto a nivel global.</strong
            > Su capacidad para anotar, su carisma y su enfoque competitivo transformaron el deporte y elevaron
            la NBA a un nivel de reconocimiento sin precedentes. Este fue también el inicio de la expansión
            internacional de la NBA, con retransmisiones en varios países y la creación de una auténtica base
            de aficionados en todo el mundo.
        </p>
    </div>
    <div class="image">
        <img src={trofeoNBA} alt="Trofeo de la NBA" />
        <p>Trofeo más icónico en el mundo del baloncesto</p>
    </div>
</div>

<div class="timeline-container">
    <h1>Torneos más importantes en el mundo</h1>
    <hr />
    <div class="timeline">
        <div class="timeline-event">
            <div class="timeline-date">1946 - Actualidad</div>
            <div class="timeline-content">
                <h2>NBA (National Basketball Association)</h2>
                <p>
                    La NBA, con sede en Estados Unidos, es considerada la liga de baloncesto más prestigiosa y
                    competitiva del mundo. Cuenta con 30 equipos y atrae a jugadores de élite a nivel mundial.
                    Su temporada culmina con los playoffs y las Finales de la NBA, donde los mejores equipos
                    compiten por el campeonato.
                </p>
            </div>
        </div>

        <div class="timeline-event">
            <div class="timeline-date">1950 - Actualidad</div>
            <div class="timeline-content">
                <h2>FIBA Basketball World Cup</h2>
                <p>
                    Este es el torneo mundial de selecciones nacionales, organizado por la Federación
                    Internacional de Baloncesto (FIBA). Se celebra cada cuatro años y reúne a los mejores
                    equipos nacionales del mundo en una competencia de formato eliminatorio, similar a la Copa
                    Mundial de fútbol.
                </p>
            </div>
        </div>

        <div class="timeline-event">
            <div class="timeline-date">1936 - Actualidad</div>
            <div class="timeline-content">
                <h2>Juegos Olímpicos</h2>
                <p>
                    El baloncesto es un evento olímpico desde 1936 para los hombres y desde 1976 para las
                    mujeres. Los equipos nacionales compiten por la medalla de oro en un torneo que incluye a
                    las mejores selecciones de cada continente, proporcionando un escenario de prestigio para
                    los jugadores y la oportunidad de representar a sus países.
                </p>
            </div>
        </div>

        <div class="timeline-event">
            <div class="timeline-date">1958 - Actualidad</div>
            <div class="timeline-content">
                <h2>EuroLeague</h2>
                <p>
                    La Euroliga es la competencia de clubes más prestigiosa de Europa, similar a la Champions
                    League en fútbol. Los mejores equipos de las ligas nacionales de Europa compiten en esta
                    liga, que culmina con el Final Four, una fase eliminatoria entre los cuatro mejores
                    equipos.
                </p>
            </div>
        </div>

        <div class="timeline-event">
            <div class="timeline-date">1983 - Actualidad</div>
            <div class="timeline-content">
                <h2>Liga ACB (Asociación de Clubes de Baloncesto)</h2>
                <p>
                    También conocida como la Liga Endesa, es la liga profesional de baloncesto en España y es
                    considerada una de las ligas más competitivas y talentosas del mundo fuera de la NBA.
                    Equipos como el Real Madrid y el Barcelona han dominado la liga históricamente y atraen
                    talento internacional.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="art-container">
    <h2>Los mejores jugadores en la historia del deporte</h2>
    <div class="conlist">
        <div class="jugadores">
            <div class="card">
                <div class="player">
                    <img src={michaelJordan} alt="Michael Jordan" />
                </div>
                <div class="intro">
                    <h1>¿Quién fue Michael Jordan?</h1>
                    <p>
                        Conocido como uno de los más grandes de todos los tiempos, Jordan ganó seis
                        campeonatos de la NBA con los Chicago Bulls.
                    </p>
                </div>
            </div>

            <div class="card">
                <div class="player">
                    <img src={leBronJames} alt="LeBron James" />
                </div>
                <div class="intro">
                    <h1>¿Quién es Lebron James?</h1>
                    <p>
                        Ha ganado múltiples campeonatos y premios MVP, y ha sido una figura destacada tanto
                        dentro como fuera de la cancha.
                    </p>
                </div>
            </div>

            <div class="card">
                <div class="player">
                    <img src={abdulJabbar} alt="Kareem Abdul-Jabbar" />
                </div>
                <div class="intro">
                    <h1>¿Quién fue Kareem Abdul-Jabbar?</h1>
                    <p>
                        Es el máximo anotador de todos los tiempos de la NBA y uno de los jugadores más
                        dominantes de la historia.
                    </p>
                </div>
            </div>
        </div>
    </div>
	<a href="/baloncesto/baloncesto2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
        <button class="next svelte-zonnq2">  
            <span class="arrow svelte-zonnq2"></span>  
        </button>  
    </a>
</div>
