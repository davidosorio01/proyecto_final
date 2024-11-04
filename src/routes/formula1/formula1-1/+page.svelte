<script>
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import '$lib/CSS/futbol_card/futbol1.css';
	import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import trofeos from '$lib/IMAGES/images_f1/Trofeos F1.png';
    import schumacher from '$lib/IMAGES/images_f1/Schumacher.jpg';
    import hamilton from '$lib/IMAGES/images_f1/hamilton.avif';
    import senna from '$lib/IMAGES/images_f1/Senna.avif';
</script>

<header>  
    <div class="menu-container">  
        <nav>  
            <img src={LogoPagina} alt="" class="logo" />  
            <div class="lesson">Historia de la Fórmula 1</div>  
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
        <h1>La Fórmula 1 a través del tiempo</h1>  
        <hr>  
        <p>  
            A lo largo del siglo XX, la Fórmula 1 ha sido sinónimo de velocidad y tecnología avanzada. Desde su inicio en 1950, ha evolucionado en un espectáculo global, destacándose por sus innovaciones tecnológicas y la rivalidad entre pilotos y escuderías de renombre.  
        </p>  
        <p>  
            Hoy en día, la Fórmula 1 es <strong>uno de los deportes más emocionantes y prestigiosos del mundo.</strong> Con millones de seguidores alrededor del planeta, sus carreras son eventos muy esperados. Equipos como Mercedes, Ferrari y Red Bull compiten ferozmente, atrayendo a los mejores pilotos y mentes ingenieras.  
        </p>  
        <p>  
            La Fórmula 1 no solo se trata de la velocidad en la pista; es una plataforma de innovación que impulsa avances en tecnología automotriz y sostenibilidad. Los cambios en reglamentaciones y la introducción de motores híbridos son ejemplos de cómo el deporte se adapta y lidera en la dirección de un futuro más verde y eficiente.  
        </p>  
    </div>  
    <div class="image">  
        <img src={trofeos} alt="" />  
        <p>Trofeos y galardones más icónicos en la F1</p>  
    </div>  
</div>
<div class="timeline-container">  
    <h1>Carreras más importantes en la Fórmula 1</h1>  
    <hr>  
    <div class="timeline">  
        <div class="timeline-event">  
            <div class="timeline-date">1950 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Gran Premio de Mónaco</h2>  
                <p>El Gran Premio de Mónaco es una de las carreras más prestigiosas y desafiantes en la Fórmula 1, celebrado anualmente en las estrechas calles del principado desde 1950. Es famoso por su glamour y la habilidad técnica que requiere de los pilotos.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1950 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Gran Premio de Italia</h2>  
                <p>El Gran Premio de Italia, celebrado en Monza, es una de las carreras más antiguas y rápidas del calendario de Fórmula 1, destacándose por su atmósfera apasionada y la historia rica del autódromo.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1950 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Gran Premio de Gran Bretaña</h2>  
                <p>El Gran Premio de Gran Bretaña, realizado en Silverstone, es un pilar del calendario de Fórmula 1, conocido por su velocidad y la devoción de los fanáticos británicos. Ha sido sede de momentos históricos en el deporte.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">2004 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Gran Premio de Bahréin</h2>  
                <p>El Gran Premio de Bahréin es una carrera relativamente nueva que ha ganado prominencia rápidamente. Celebrado en el Circuito Internacional de Bahréin, es conocido por sus carreras nocturnas espectaculares bajo las luces.</p>  
            </div>  
        </div>  
        
        <div class="timeline-event">  
            <div class="timeline-date">1973 - Actualidad</div>  
            <div class="timeline-content">  
                <h2>Gran Premio de Japón</h2>  
                <p>El Gran Premio de Japón, celebrado en Suzuka, es famoso por su exigente circuito en forma de figura ocho y la pasión de los fanáticos japoneses. Ha sido escenario de decisiones de campeonatos dramáticas.</p>  
            </div>  
        </div>  
    </div>  
    <br><br>  
</div>
<div class="art-container">
    <h2>
        Los mejores pilotos en la historia del deporte
    </h2>
    <br>
    <div class="conlist">
        <div class="jugadores">
            <div class="card">
                <div class="player">
                    <img src={schumacher} alt="Schumacher">
                </div>
                <div class="intro">
                    <h1>¿Quién es Schumacher?</h1>
                    <p>
                        Michael Schumacher se destaca como uno de los mejores pilotos en la historia de la Fórmula 1 debido a su combinación única de talento, consistencia y logros. 
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={hamilton} alt="Hamilton">
                </div>
                <div class="intro">
                    <h1>¿Quién es Hamilton?</h1>
                    <p>
                        Hamilton es uno de los mejores pilotos en la historia gracias a su impresionante récord de victorias y títulos. Ha ganado 7 campeonatos mundiales.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="player">
                    <img src={senna} alt="Senna">
                </div>
                <div class="intro">
                    <h1>¿Quién fue Senna?</h1>
                    <p>
                        Ayrton Senna, el "Rey de Mónaco", es una leyenda de la F1 por su habilidad extraordinaria y récords históricos. Ganó tres campeonatos mundiales.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<a href="/formula1/formula1-2" data-sveltekit-reload="" data-sveltekit-preload-data="tap">  
    <button class="next svelte-zonnq2">  
        <span class="arrow svelte-zonnq2"></span>  
    </button>  
</a>