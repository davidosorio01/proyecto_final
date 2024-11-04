<script lang="ts">
    import { onMount } from 'svelte';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import skatepark from '$lib/IMAGES/images_stake/SkatePark.webp';
    import xGames from '$lib/IMAGES/images_stake/Xgames.png';
    import sls from '$lib/IMAGES/images_stake/TrofeoSLS.png';
    import dewTour from '$lib/IMAGES/images_stake/DewTour.png';
    import vansPark from '$lib/IMAGES/images_stake/VansPark.png';
    import redBull from '$lib/IMAGES/images_stake/RedbullSkate.png';
    import usa from '$lib/IMAGES/images_stake/USA.png';

    let currentSlide = 0;

    // Definimos el tipo de contenido de cada diapositiva
    type SlideContent = {
        imgSrc: string;
        text: string;
    };

    // Array de contenido para cada diapositiva
    const slidesContent: SlideContent[] = [
        {
            imgSrc: skatepark,
            text: `El skateboarding, <strong>más allá de ser solo un deporte extremo</strong>, es una poderosa herramienta de cambio social. Sus impactos positivos son evidentes en múltiples áreas, promoviendo la inclusión, la creatividad y el sentido de comunidad en todo el mundo. El skateboarding ha crecido en popularidad y, más allá de su aspecto competitivo, <strong>ha demostrado tener un gran impacto social</strong>, especialmente en comunidades urbanas donde fomenta la cohesión social y brinda oportunidades de desarrollo a jóvenes y adultos por igual.`
        },
        {
            imgSrc: xGames,
            text: `<strong>Los X Games</strong> son uno de los eventos internacionales de deportes extremos más prestigiosos, organizados por ESPN desde 1995. Este evento se celebra dos veces al año, en ediciones de verano e invierno, y reúne a los mejores atletas de disciplinas como skateboarding, BMX, motocross y snowboard. Los atletas compiten en modalidades como <strong>Street, Vert y Big Air</strong>, mostrando habilidades extraordinarias y creatividad. A lo largo de su historia, los X Games han sido la plataforma para muchas leyendas del deporte, como Tony Hawk, Bob Burnquist y Nyjah Huston en skateboarding.`
        },
        {
            imgSrc: sls,
            text: `<strong>La Street League Skateboarding (SLS)</strong> es uno de los torneos de skateboarding más prestigiosos a nivel mundial, en el que participan los mejores skaters de la modalidad de street. Fundada en 2010 por el skater profesional Rob Dyrdek. La liga se celebra cada año y destaca no solo por el nivel técnico de los competidores, sino también por la intensidad de las pruebas y la creatividad de los trucos que se ejecutan. Con el tiempo, la SLS ha crecido en alcance y relevancia, <strong>ampliándose a diferentes ciudades de todo el mundo</strong>.`
        },
        {
            imgSrc: dewTour,
            text: `<strong>El Dew Tour</strong> es uno de los eventos más importantes en el mundo de los deportes extremos, especialmente reconocido en el skateboarding y BMX. Organizado cada año, reúne a algunos de los mejores atletas de estas disciplinas en competiciones de estilo street y park. El Dew Tour se ha ganado un lugar destacado por su enfoque en la cultura urbana y la comunidad, ofreciendo experiencias que combinan deportes de acción, música y arte. Este evento es uno de los <strong>favoritos tanto de los aficionados como de los atletas</strong>, alcanzando audiencias globales y contribuyendo a la popularización del skateboarding y otros deportes de acción en todo el mundo.`
        },
        {
            imgSrc: vansPark,
            text: `<strong>El Vans Park Series</strong> es uno de los campeonatos de skateboarding más importantes en la modalidad de park, y un referente mundial en el skateboarding profesional. Fundado por Vans, esta serie de competencias reúne a los mejores skaters de todo el mundo para competir en bowls y parques de alta dificultad, donde destacan el estilo, la fluidez y la creatividad en las transiciones. El Vans Park Series es reconocido por su ambiente inclusivo y su enfoque en la cultura skate, lo que lo convierte en uno de los eventos <strong>más respetados y emocionantes del skateboarding global.</strong>`
        },
        {
            imgSrc: redBull,
            text: `<strong>El Red Bull Skate Arcades</strong> es uno de los torneos de skateboarding más innovadores y emocionantes, organizado por Red Bull y enfocado en el estilo de skate urbano. Desde su creación, el torneo reta a los skaters a completar trucos y desafíos en diferentes ubicaciones, como si fuera un videojuego en la vida real, otorgando puntos y premios a los mejores competidores. El Red Bull Skate Arcades es conocido por su <strong>creatividad y espíritu urbano,</strong> reuniendo a talentosos skaters de distintas partes del mundo en locaciones icónicas.`
        },
        {
            imgSrc: usa,
            text: `<strong>Estados Unidos tiene una historia rica en el skateboarding;</strong> es el país donde este deporte surgió y creció hasta convertirse en un fenómeno cultural. En ciudades y suburbios por todo el país, niños y jóvenes aprenden a patinar en calles, parques y skateparks, lo que fomenta un estilo creativo y técnico. Este ambiente ha permitido a los skaters estadounidenses desarrollar un enfoque innovador y audaz, lleno de trucos avanzados y estilo propio. Estados Unidos es una <strong>fuente constante de talento,</strong> habiendo dado origen a algunos de los skaters más icónicos de la historia, <strong>como Tony Hawk, Rodney Mullen y Nyjah Huston.</strong>`
        }
    ];

    let slides: HTMLElement[] = [];

    function showSlide(n: number): void {
        if (!slides.length) return;
        slides.forEach((slide, index) => {
            slide.style.opacity = index === n ? '1' : '0';
            slide.classList.toggle('active', index === n);
        });
    }

    function plusSlides(n: number): void {
        currentSlide += n;
        if (currentSlide >= slides.length) { 
            currentSlide = 0;
        } else if (currentSlide < 0) { 
            currentSlide = slides.length - 1;
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
                <div class="lesson">Historia del Skateboarding</div>

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
            <!-- Diapositivas renderizadas dinámicamente -->
            {#each slidesContent as slide}
                <div class="slide">
                    <img src={slide.imgSrc} class="slide-img" alt="">
                    <div class="text-overlay">
                        <p>{@html slide.text}</p>
                    </div>
                </div>
            {/each}

            <!-- Botones de navegación -->  
            <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>  
            <button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>  
        </div>

        <!-- Botón para proceder a la siguiente sección -->  
        <a href="/stake/stake3" data-sveltekit-reload data-sveltekit-preload-data="tap">  
            <button class="next svelte-zonnq2">  
                <span class="arrow svelte-zonnq2"></span>  
                <span class="arrow2 svelte-zonnq2"></span>  
            </button>  
        </a>  
    </div>  
</div>
