<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/CSS/futbol_card/futbol2.css';
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import partido from '$lib/IMAGES/images_futbol/Partido.webp';
    import mundial from '$lib/IMAGES/images_futbol/Mundial.webp';
    import euro from '$lib/IMAGES/images_futbol/Euro.webp';
    import champions from '$lib/IMAGES/images_futbol/Champions.webp';
    import premierLeague from '$lib/IMAGES/images_futbol/Premier League.png';
    import libertadores from '$lib/IMAGES/images_futbol/Libertadores.jpg';
    import brasil from '$lib/IMAGES/images_futbol/Brasil.png';
	import BotonVolver from '$lib/componentes/BotonVolver.svelte';

    interface SlideContent {
        imgSrc: string;
        text: string;
    }

    const slidesContent: SlideContent[] = [
        {
            imgSrc: mundial,
            text: '<strong>La Copa Mundial de la FIFA</strong> es el torneo internacional de fútbol más prestigioso, celebrado cada cuatro años desde su primera edición en 1930. La última edición tuvo lugar en Qatar 2022, marcando la 22ª Copa del Mundo. Los máximos ganadores de este trofeo son Brasil con 5, e Italia y Alemania con 4. <strong>Brasil es el único equipo que ha participado en todas las ediciones</strong> del torneo y es el máximo ganador. En total, han existido ocho campeones diferentes en la historia del Mundial. En la edición de Qatar, participaron 32 selecciones nacionales, aunque a partir de 2026, el número aumentará a 48 equipos. Esta última edición fue notable por ser la primera en Oriente Medio y se celebró en noviembre y diciembre para evitar las altas temperaturas del verano qatarí.'
        },
        {
            imgSrc: euro,
            text: '<strong>La Eurocopa</strong> es uno de los torneos de fútbol más prestigiosos a nivel mundial, en el que participan selecciones nacionales europeas. Organizada por la UEFA, se celebra cada cuatro años y su primer torneo tuvo lugar en 1960. La Eurocopa destaca no solo por la calidad de los equipos y jugadores, sino también por la intensidad de la competencia y la pasión de sus seguidores en toda Europa. El torneo ha crecido con el tiempo tanto en participantes como en relevancia, <strong>ampliándose en 2016 a 24 selecciones,</strong> lo cual permitió que más países tuvieran la oportunidad de competir.'
        },
        {
            imgSrc: champions,
            text: '<strong>La UEFA Champions League</strong> es el torneo de clubes más importante de Europa y uno de los eventos futbolísticos más prestigiosos del mundo. Organizado cada temporada por la UEFA, enfrenta a los mejores equipos de las ligas europeas en busca de coronarse campeones del continente. El máximo ganador de la historia es el Real Madrid, con 14 títulos, seguido por el AC Milan y Bayern de Múnich, entre otros clubes destacados. La Champions es uno de los <strong>eventos deportivos más vistos en el mundo,</strong> con audiencias que superan los 400 millones de espectadores. Además, Cristiano Ronaldo es el máximo goleador histórico de la competición, mientras que Lionel Messi y Karim Benzema lo siguen en la lista.'
        },
        {
            imgSrc: premierLeague,
            text: '<strong>La Premier League</strong> es la liga de fútbol profesional de Inglaterra y, para muchos, la mejor y más competitiva liga del mundo. Fundada en 1992 tras separarse de la Football League, la Premier se compone de 20 equipos que juegan una temporada de ida y vuelta. La intensidad de la competencia y el talento de sus jugadores atraen a millones de espectadores globalmente, convirtiéndola en una de las ligas <strong>más vistas y prestigiosas del planeta.</strong> Algunos de los equipos más icónicos, como el Manchester United, Liverpool, Arsenal, Manchester City y Chelsea, han elevado el nivel de la Premier con títulos nacionales e internacionales.'
        },
        {
            imgSrc: libertadores,
            text: '<strong>La Copa Libertadores</strong> es el torneo de clubes más importante de América del Sur, organizado por la Confederación Sudamericana de Fútbol (CONMEBOL). Desde su fundación en 1960, enfrenta a los mejores equipos de la región en busca de coronarse <strong>campeones del continente,</strong> y es conocida por su intensidad, pasión y rivalidades. El torneo reúne a clubes de diez países sudamericanos y es el equivalente en América de la UEFA Champions League. El máximo ganador de la historia es el Club Atlético Independiente de Argentina, con 7 títulos. Otros clubes históricos en la competencia incluyen Boca Juniors y River Plate de Argentina, así como Peñarol y Nacional de Uruguay, y Palmeiras y Santos de Brasil.'
        },
        {
            imgSrc: brasil,
            text: '<strong>Brasil tiene una historia rica en el deporte;</strong> es un país donde el fútbol es una parte integral de la identidad nacional. Niños y jóvenes crecen jugando en las calles, en campos improvisados y en canchas de playa, lo que fomenta una creatividad y habilidad únicas. Este contexto permite que los jugadores brasileños desarrollen un estilo de juego técnico, lleno de dribles, regates y precisión, que los distingue en cualquier escenario. Brasil es una <strong>fuente inagotable de talento,</strong> habiendo producido a algunos de los mejores jugadores de la historia del fútbol, como Pelé, Zico, Romário, Ronaldo, Ronaldinho y Neymar.'
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

    function toggleMenu(): void {
        menuOpen = !menuOpen;
    }

    onMount(() => {
        slides = Array.from(document.querySelectorAll('.slide')) as HTMLElement[];
        showSlide(currentSlide);
    });
</script>

<div>
    <div id="loading-screen">
        <div id="loading-spinner"></div>
    </div>

    <header>
        <div class="menu-container">
            <nav>
                <img src={LogoPagina} alt="Logo de la página" class="logo" />
                <div class="lesson">Historia del futbol</div>

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

            <button class="buttons" id="prevBtn" on:click={() => plusSlides(-1)}>&lt;</button>
            <button class="buttons" id="nextBtn" on:click={() => plusSlides(1)}>&gt;</button>
        </div>

        <a href="/futbol/futbol3" data-sveltekit-reload data-sveltekit-preload-data="tap">
            <button class="next svelte-zonnq2">
                <span class="arrow svelte-zonnq2"></span>
            </button>
        </a>
    </div>
</div>

<style>
    /* Aquí se puede omitir el estilo si ya está en futbol2.css */
</style>
