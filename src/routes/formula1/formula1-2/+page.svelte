<script lang="ts">
    import { onMount } from 'svelte';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import '$lib/CSS/futbol_card/futbol2.css';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import carrera from '$lib/IMAGES/images_f1/CarreraF1.png';
    import campeonMundial from '$lib/IMAGES/images_f1/CampeonMundial.png';
    import constructores from '$lib/IMAGES/images_f1/Constructores.png';
    import austriaGP from '$lib/IMAGES/images_f1/AustriaGP.png';
    import podio from '$lib/IMAGES/images_f1/Podio.png';
    import carrera2 from '$lib/IMAGES/images_f1/Carrera2.png';
    import monaco from '$lib/IMAGES/images_f1/Monaco.png';

    let currentSlide = 0;

    // Definimos el tipo de contenido de cada diapositiva
    type SlideContent = {
        imgSrc: string;
        text: string;
    };

    // Array de contenido para cada diapositiva
    const slidesContent: SlideContent[] = [
        {
            imgSrc: carrera,
            text: '<strong>La Fórmula 1</strong> es una de las competiciones automovilísticas más influyentes del mundo y, para muchos, un motor de innovación y desarrollo. Fundada en 1950, la F1 no solo impulsa avances en tecnología automotriz y seguridad, sino que también fomenta la sostenibilidad a través de investigaciones en energías alternativas. Su alcance global da lugar a un considerable impacto económico en las ciudades anfitrionas, atrayendo turismo y generando empleo. Además, la F1 inspira a las nuevas generaciones y promueve la diversidad y la inclusión, convirtiéndola en una plataforma de relevancia social y cultural.'
        },
        {
            imgSrc: campeonMundial,
            text: '<strong>Campeonato Mundial de Pilotos</strong> Este es el premio más importante para los pilotos, otorgado al piloto que obtiene la mayor cantidad de puntos durante la temporada. Al final de la temporada, el piloto que acumula más puntos es declarado campeón del mundo de pilotos. En caso de empate en puntos, se utilizan criterios de desempate, comenzando por el número de victorias y posteriormente por el número de segundos puestos, y así sucesivamente. Este <strong>competitivo sistema ha hecho de la Fórmula 1</strong> un campeonato emocionante y muy seguido alrededor del mundo.'
        },
        {
            imgSrc: constructores,
            text: '<strong>El Campeonato de Constructores</strong> es la máxima competición de ingeniería y diseño en la Fórmula 1, y para muchos, representa la esencia de la excelencia técnica y la innovación en el automovilismo. Establecido desde el inicio del campeonato en 1958, el Campeonato de Constructores reconoce al equipo que acumula más puntos a lo largo de una temporada, compuesta por diversas carreras en circuitos de todo el mundo. La feroz competencia y el talento de los ingenieros y diseñadores atraen la atención de millones de aficionados y expertos, convirtiéndolo en uno de los campeonatos <strong>más seguidos y respetados.</strong>'
        },
        {
            imgSrc: austriaGP,
            text: '<strong>Un Gran Premio</strong> es una de las carreras más emblemáticas dentro del calendario de la Fórmula 1, y para muchos, representa la culminación de la competición automovilística a más alto nivel. Desde el primer Gran Premio en 1906, las carreras han evolucionado para convertirse en <strong>eventos espectaculares que atraen a millones de espectadores en todo el mundo.</strong> Cada Gran Premio se lleva a cabo en un circuito específico, ya sea en un trazado permanente o en una pista callejera, y forma parte del Campeonato Mundial de Fórmula 1.'
        },
        {
            imgSrc: podio,
            text: '<strong>La Fórmula 1</strong> ha contado con una serie de pilotos extraordinarios que han dejado una huella imborrable en la historia. Entre los mayores exponentes de la F1 se encuentran leyendas como Michael Schumacher, cuyo récord de siete campeonatos mundiales ha marcado un estándar difícil de igualar; Ayrton Senna, conocido por su increíble habilidad y pasión en la pista; y Lewis Hamilton, el piloto más exitoso de la era moderna, que ha igualado el récord de títulos y se ha convertido en un defensor de la diversidad y la sostenibilidad en el deporte.'
        },
        {
            imgSrc: carrera2,
            text: '<strong>Mejor carrera del siglo XXI</strong> Una de las mejores carreras de Fórmula 1 del siglo XXI es, sin duda, el Gran Premio de Brasil de 2008, celebrado en el circuito de Interlagos. Esta carrera se destacó no solo por su emocionante conclusión, sino también por la significativa importancia que tuvo en la lucha por el campeonato mundial. En esta carrera, Lewis Hamilton, de McLaren, llegó a São Paulo como el líder del campeonato, pero solo contaba con un punto de ventaja sobre Felipe Massa, de Ferrari. La emoción era palpable, ya que cualquier error podría costarle el título a Hamilton.'
        },
        {
            imgSrc: monaco,
            text: '<strong>Mejor carrera del siglo XX</strong> Una de las mejores carreras de Fórmula 1 del siglo XX es el Gran Premio de Mónaco de 1992, que es ampliamente recordado por su emocionante final y la brillante actuación de su ganador, Ayrton Senna. El Gran Premio de Mónaco es conocido por ser uno de los eventos más prestigiosos del calendario de la Fórmula 1, con su famoso trazado urbano que presenta un desafío único debido a sus estrechas calles y curvas. Senna, quien ya era una figura destacada en el deporte, <strong>buscaba su tercera victoria consecutiva en Mónaco.</strong>'
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
                <div class="lesson">Historia de la F1</div>

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
        <a href="/formula1/formula1-3" data-sveltekit-reload data-sveltekit-preload-data="tap">  
            <button class="next svelte-zonnq2">  
                <span class="arrow svelte-zonnq2"></span>  
            </button>  
        </a>
    </div>
</div>

