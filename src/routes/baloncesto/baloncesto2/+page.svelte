<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import partidoNBA from '$lib/IMAGES/images_baloncesto/PartdidoNBA.png';
    import NBAtrophie from '$lib/IMAGES/images_baloncesto/NBAtrophie.png';
    import FIBAtrophie from '$lib/IMAGES/images_baloncesto/FIBAtrophie.png';
    import OlimpicoNBA from '$lib/IMAGES/images_baloncesto/OlimpicoNba.png';
    import EuroLeague from '$lib/IMAGES/images_baloncesto/EuroLeague.png';
    import LigaACB from '$lib/IMAGES/images_baloncesto/LigaACB.png';
    import USA from '$lib/IMAGES/images_baloncesto/USA.png';

    interface SlideContent {
        imgSrc: string;
        text: string;
    }

    const slidesContent: SlideContent[] = [
        {
            imgSrc: partidoNBA,
            text: "<strong>El baloncesto ha tenido un impacto significativo,</strong> desde el ámbito social hasta el económico y el educativo. En el aspecto social, el baloncesto ha servido como una herramienta de integración y empoderamiento, especialmente en comunidades urbanas, proporcionando un espacio de desarrollo personal y un sentido de pertenencia para jóvenes de diversas culturas. En el ámbito económico, la popularidad del baloncesto genera ingresos millonarios a través de ligas profesionales, <strong>eventos internacionales y acuerdos de patrocinio, impulsando la economía local y global.</strong>"
        },
        {
            imgSrc: NBAtrophie,
            text: "<strong>La NBA (National Basketball Association)</strong> Fundada en 1946, es la liga profesional de baloncesto más importante en el mundo, con sede en Estados Unidos. En sus inicios, la liga era una fusión entre la Basketball Association of America (BAA) y la National Basketball League (NBL). <strong>La NBA es reconocida por su formato de competencia intensa y emocionante,</strong> donde equipos como Los Angeles Lakers, Boston Celtics, Chicago Bulls y Golden State Warriors se han destacado a lo largo de los años. Los Celtics y Lakers lideran en campeonatos, con 17 títulos cada uno, y figuras legendarias como <strong>Michael Jordan, LeBron James y Kobe Bryant.</strong>"
        },
        {
            imgSrc: FIBAtrophie,
            text: "<strong>La FIBA Basketball World Cup</strong>, organizada por la Federación Internacional de Baloncesto (FIBA) desde 1950, es el torneo de baloncesto internacional más importante a nivel de selecciones nacionales. <strong>Celebrado cada cuatro años, reúne a los mejores equipos de todo el mundo.</strong> Estados Unidos y la extinta Yugoslavia comparten el récord de más títulos, con cinco campeonatos cada uno, seguidos por la Unión Soviética y Brasil. El torneo se basa en una fase de grupos inicial, seguida por rondas de eliminación directa, en donde los equipos compiten por el prestigioso título mundial y <strong>la clasificación a los JJ.OO.</strong>"
        },
        {
            imgSrc: OlimpicoNBA,
            text: "<strong>El baloncesto se incluyó oficialmente en los Juegos Olímpicos en 1936</strong>, convirtiéndose en uno de los eventos más esperados y competitivos del programa olímpico. En este torneo, selecciones nacionales de <strong>alto nivel,</strong> como Estados Unidos, España y Argentina, han disputado intensamente las medallas. Estados Unidos lidera en títulos olímpicos, especialmente con su equipo masculino, que ha dominado en múltiples ediciones, destacando con figuras como <strong>Michael Jordan, Magic Johnson y LeBron James.</strong>"
        },
        {
            imgSrc: EuroLeague,
            text: "<strong>La EuroLeague</strong>, fundada en 1958, es la principal liga de baloncesto de clubes en Europa y una de las más prestigiosas del mundo. Reúne a <strong>equipos élite de diferentes países europeos,</strong> entre ellos el Real Madrid, CSKA Moscú, FC Barcelona y Panathinaikos, que han dejado una huella importante en la historia del torneo. Con más de diez títulos, el Real Madrid es el equipo con más campeonatos, seguido de cerca por el CSKA Moscú. La EuroLeague se basa en <strong>una fase regular donde los mejores equipos de Europa compiten entre sí</strong>, seguida por eliminatorias y el Final Four."
        },
        {
            imgSrc: LigaACB,
            text: "<strong>La Liga ACB</strong> es la máxima competición de clubes de baloncesto en España, organizada por la Asociación de Clubes de Baloncesto (ACB). Fundada en 1983, enfrenta a los mejores equipos del país en la búsqueda de consagrarse <strong>campeones de la liga española</strong>, siendo reconocida por su alto nivel de juego, intensidad y grandes rivalidades. Este torneo reúne a clubes de toda España y es considerado una de las ligas de baloncesto más importantes de Europa, comparable a la NBA en Estados Unidos o la EuroLeague en el ámbito continental. Entre los clubes históricos se destacan el Real Madrid y el Barcelona."
        },
        {
            imgSrc: USA,
            text: "<strong>Estados Unidos tiene una historia profunda en el baloncesto;</strong> es un país donde este deporte es una parte fundamental de la cultura y el entretenimiento. El entorno en donde crecen los jugadores estadounidenses contribuyen al desarrollo de un estilo de juego dinámico y atlético, caracterizado por la velocidad, el manejo del balón y el dominio en el aire, cualidades que los destacan en las ligas de todo el mundo. Estados Unidos es una <strong>cuna inagotable de talento,</strong> habiendo producido a algunos de los mejores jugadores de la historia del baloncesto, <strong>como Michael Jordan, Magic Johnson, Larry Bird, Kobe Bryant y LeBron.</strong>"
        }
    ];

    let currentSlide = 0;
    let slides: HTMLElement[] = [];
    let menuOpen = false;

    function showSlide(n: number): void {
        if (!slides.length) return;
        slides.forEach((slide, index) => {
            slide.style.opacity = index === n ? '1' : '0';
            slide.classList.toggle('active', index === n);
        });
    }

    function plusSlides(n: number): void {
        currentSlide += n;
        if (currentSlide >= slidesContent.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slidesContent.length - 1;
        }
        showSlide(currentSlide);
    }
    
    onMount(() => {
        slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
        showSlide(currentSlide);
    });
</script>

<div>
    <!-- Pantalla de carga -->
    <div id="loading-screen">
        <div id="loading-spinner"></div>
    </div>

    <!-- Encabezado -->
    <header>
        <div class="menu-container">
            <nav>
                <img src={LogoPagina} alt="Logo de la página" class="logo" />
                <div class="lesson">Historia del Baloncesto</div>

                <!-- Barra de progreso -->
                <div class="nav-item" id="nav-item-1">
                    <div class="progress-bar" id="progress-bar">
                        <div class="rombo" id="rombo-1"><span class="numero"></span></div>
                        <div class="square" id="square-1"><span class="numero-2"></span></div>
                        <div class="rombo" id="rombo-2"><span class="numero">3</span></div>
                        <div class="circle" id="circle-2"><span class="numero"></span></div>
                    </div>
                </div>
                <BotonVolver/>
            </nav>
        </div>
        <div class="level-info" id="level-info"></div>
    </header>

    <!-- Contenedor principal -->
    <div class="container">
        <div class="slider-container">
            {#each slidesContent as slideContent}
                <div class="slide" style="opacity: 0;">
                    <img src={slideContent.imgSrc} class="slide-img" alt={slideContent.text} />
                    <div class="text-overlay">
                        <p>{@html slideContent.text}</p>
                    </div>
                </div>
            {/each}

            <!-- Botones de navegación -->
            <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
            <button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
        </div>

        <!-- Botón para proceder a la siguiente sección -->
        <a href="/baloncesto/baloncesto3" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>
