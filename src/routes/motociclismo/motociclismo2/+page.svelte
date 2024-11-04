<script lang="ts">
    import { onMount } from 'svelte';
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import carrera2 from '$lib/IMAGES/images_motociclismo/Carrrera2Gp.png';
    import campeonIn from '$lib/IMAGES/images_motociclismo/CampeonindividualGP.png';
    import motogp from '$lib/IMAGES/images_motociclismo/MotoGPconstructores.png';
    import carrera1 from '$lib/IMAGES/images_motociclismo/Carrera1.png';
    import podio from '$lib/IMAGES/images_motociclismo/PodioGP.png';
    import motogprace from '$lib/IMAGES/images_motociclismo/MotoGPrace.png';
    import gpjapon from '$lib/IMAGES/images_motociclismo/GPjapon.png';

    let currentSlide = 0;

    // Definimos el tipo de contenido de cada diapositiva
    type SlideContent = {
        imgSrc: string;
        text: string;
    };

    // Array de contenido para cada diapositiva (MotoGP)
    const slidesContent: SlideContent[] = [
        {
            imgSrc: carrera2, // Aquí va la ruta de la imagen
            text: '<strong>El motociclismo GP</strong> es una de las competiciones de motos más influyentes y emocionantes del mundo, considerada por muchos como un catalizador de innovación y tecnología. Fundada en 1949, MotoGP no solo impulsa avances en ingeniería de motocicletas y seguridad en la conducción, sino que también fomenta la sostenibilidad a través de investigaciones en combustibles alternativos y tecnologías más limpias. Su alcance internacional genera un impacto económico significativo en las ciudades anfitrionas, atrayendo turismo y creando oportunidades de empleo.'
        },
        {
            imgSrc: campeonIn, // Aquí va la ruta de la imagen
            text: '<strong>Campeonato Mundial de Pilotos de MotoGP</strong> Este es el título más prestigioso para los pilotos de motociclismo, otorgado al piloto que acumula la mayor cantidad de puntos a lo largo de la temporada. Al final de la temporada, el piloto con más puntos es coronado como campeón del mundo de MotoGP. En caso de empate, se aplican criterios de desempate, comenzando con el número de victorias y luego el de segundos lugares, y así sucesivamente. Este <strong>competitivo sistema ha convertido a MotoGP</strong> en un campeonato apasionante y seguido mundialmente por millones de fanáticos del deporte de motor.'
        },
        {
            imgSrc: motogp, // Aquí va la ruta de la imagen
            text: '<strong>El Campeonato Mundial de Constructores de MotoGP</strong> es la máxima expresión de innovación y tecnología en el motociclismo de alto nivel, y para muchos, representa el núcleo de la excelencia en ingeniería dentro de las competencias de dos ruedas. Desde los primeros años del campeonato, el título de constructores ha premiado a la marca cuya motocicleta ha demostrado el mejor desempeño a lo largo de la temporada. En este campeonato, solo se cuenta el mejor resultado de cada fabricante en cada carrera, lo que impulsa a las marcas como Honda, Yamaha y Ducati a buscar la perfección en cada detalle.'
        },
        {
            imgSrc: carrera1, // Aquí va la ruta de la imagen
            text: '<strong>El Campeonato Mundial de Equipos de MotoGP</strong> es una competencia que premia el esfuerzo colectivo y la estrategia de cada equipo, reconociendo a la escudería que acumula la mayor cantidad de puntos con todos sus pilotos a lo largo de la temporada. Este campeonato destaca no solo la habilidad de los pilotos en la pista, sino también el trabajo conjunto de ingenieros, mecánicos y estrategas que optimizan el rendimiento de cada moto. Equipos de renombre como Repsol Honda, Ducati Lenovo y Monster Energy Yamaha luchan por este título, que refleja la coordinación y excelencia de todos los miembros.'
        },
        {
            imgSrc: podio, // Aquí va la ruta de la imagen
            text: '<strong>El motociclismo GP</strong> ha tenido una pléyade de pilotos excepcionales que han dejado una marca indeleble en la historia del deporte. Entre los grandes exponentes de MotoGP se encuentran leyendas como Giacomo Agostini, cuyo récord de 15 campeonatos mundiales aún perdura como un hito difícil de alcanzar; Valentino Rossi, apodado "Il Dottore", conocido por su carisma, versatilidad y por haber revolucionado la popularidad del motociclismo en todo el mundo; y Marc Márquez.'
        },
        {
            imgSrc: motogprace, // Aquí va la ruta de la imagen
            text: '<strong>Mejor carrera del siglo XXI</strong> Una de las mejores carreras de MotoGP del siglo XXI es, sin lugar a dudas, el Gran Premio de Cataluña de 2016, celebrado en el Circuito de Montmeló. Esta carrera destacó por su increíble nivel de competencia y un emocionante duelo en la pista entre Valentino Rossi, Marc Márquez y Jorge Lorenzo, tres de los mejores pilotos de la época. Desde el inicio, la carrera estuvo llena de acción y adelantamientos espectaculares, con Márquez y Rossi intercambiando posiciones en varias ocasiones. La intensidad de la batalla culminó en las últimas vueltas, donde cada piloto arriesgó al máximo.'
        },
        {
            imgSrc: gpjapon, // Aquí va la ruta de la imagen
            text: '<strong>Mejor carrera del siglo XX</strong> Una de las mejores carreras de MotoGP del siglo XX es, sin duda, el Gran Premio de Gran Bretaña de 1979, celebrado en el icónico circuito de Silverstone. Esta carrera es recordada por el emocionante y feroz duelo entre los grandes pilotos Kenny Roberts y Barry Sheene, quienes se enfrentaron en un épico tira y afloja que mantuvo a los aficionados al borde de sus asientos. Roberts, conocido por su estilo de conducción agresivo y su capacidad para controlar su motocicleta en condiciones difíciles, se vio las caras con Sheene.'
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
                <div class="lesson">Historia del motociclismo</div>

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
        <a href="/motociclismo/motociclismo3" data-sveltekit-reload data-sveltekit-preload-data="tap">  
            <button class="next svelte-zonnq2">  
                <span class="arrow svelte-zonnq2"></span>  
            </button>  
        </a>
    </div>
</div>
