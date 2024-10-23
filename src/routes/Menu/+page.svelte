<script>
    import { onMount } from 'svelte';
    import barca from '$lib/IMAGES/Barca.png'
    import bayern from '$lib/IMAGES/Bayern.png'
    import city from '$lib/IMAGES/City.png'
    import juventus from '$lib/IMAGES/Juventus.png'
    import psg from '$lib/IMAGES/PSG.png'
    import real from '$lib/IMAGES/RealMadrid.png'
    import Corredor1 from '$lib/IMAGES/ImagenCorredor.png'
    import Corredor2 from '$lib/IMAGES/ImagenCorredor2.png'
    import ESPN from '$lib/IMAGES/LogoESPN.png'
    import AS from '$lib/IMAGES/LogoAs.png'
    import Lequipe from '$lib/IMAGES/LogoLequipe.png'
    import sports from '$lib/IMAGES/LogoSport.jpg'
    import M from '$lib/IMAGES/LogoM.jpg'
    import MD from '$lib/IMAGES/LogoMD.png'
    import LogoPagina from '$lib/IMAGES/LogoPag.jpg';
    import '$lib/CSS/inicio.css'

    let currentSlide = 0;
    const slides = [
      { src: barca, alt: 'TifoBvB' },
      { src: bayern, alt: 'TifoLiverpool' },
      { src: city, alt: 'TifoMadrid' },
      { src: juventus, alt: 'TifoMilan' },
      { src: psg, alt: 'TifoPsg' },
      { src: real, alt: 'Bayern' },
    ];
  
    const diarios = [
      { name: 'Diario AS', url: 'https://colombia.as.com/', logo: AS },
      { name: 'ESPN', url: 'https://www.espn.com.co/', logo: ESPN },
      { name: "Diario L'Equipe", url: 'https://www.lequipe.fr/', logo: Lequipe },
      { name: 'Diario Sport', url: 'https://www.sport.es/co/', logo: sports },
      { name: 'Diario Marca', url: 'https://www.marca.com/', logo: M },
      { name: 'Diario Mundo Deportivo', url: 'https://www.mundodeportivo.com/', logo: MD },
    ];
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
    }
  
    onMount(() => {
      const interval = setInterval(nextSlide, 2000);
      return () => clearInterval(interval);
    });
  </script>

  <svelte:head>
    <script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"></script>
  </svelte:head>
    <!-- Aquí va el resto de tu componente -->
  <main>
    <header>
      <div class="container">
        <div class="container__header">
          <div class="logo" data-sveltekit-preload-data="tap">
            <a href="/">
              <img src={LogoPagina} alt="Logo">
            </a>
          </div>
          <div class="menu">
            <nav>
              <ul>
                <li><a href="#SobreNosotros">Sobre nosotros</a></li>
                <li><a href="#News">Noticias</a></li>
                <li><a href="#Contactanos">Contactanos</a></li>
              </ul>
            </nav>
            <a href="./" class="btn__quote" data-sveltekit-preload-data="tap">Volver</a>
          </div>
        </div>
      </div>
    </header>
  
    <div class="container__cover div__offset">
      <div class="cover">
        <section class="text__cover">
          <h1>Sport Scores. <br> Estadísticas en todo momento.</h1>
          <p>
            Somos una página web deportiva que ofrece noticias, estadísticas y análisis de una gran variedad de deportes y ligas alrededor del mundo. Además, promovemos e incentivamos el conocimiento del deporte, sus beneficios y todo aquello que se debe conocer de este increíble mundo.
          </p>
          <a href="/prueba" class="btn__text-cover btn__text" data-sveltekit-preload-data="tap" data-sveltekit-reload>Empezar</a>
        </section>
        <div id="slider">
          {#each slides as slide, i}
            <input
              type="radio"
              name="slider"
              id="s{i + 1}"
              checked={currentSlide === i}
            >
          {/each}
          {#each slides as slide, i}
            <label for="s{i + 1}" id="slide{i + 1}">
              <div class="buffer"></div>
              <img src={slide.src} alt={slide.alt}>
            </label>
          {/each}
        </div>
      </div>
    </div>
  
    <div class="container__about div__offset" id="SobreNosotros">
      <div class="about">
        <div class="text__about" data-sveltekit-preload-data="tap">
          <h1>Sobre nosotros</h1>
          <p>
            Somos un grupo de estudiantes apasionados por la programación y el deporte, por esto hemos querido fusionar nuestras habilidades y nuestros gustos para así promover la realización del deporte, sin olvidar también la incentivación al adquirir un conocimiento sobre este mundo tan vasto.
          </p>
          <a href="/" class="btn__text-about btn__text">Saber Más</a>
        </div>
        <div class="image__about">
          <img src={Corredor1} alt="Corredor 1">
          <img src={Corredor2} alt="Corredor 2">
        </div>
      </div>
    </div>
  
    <div class="container__service container__card-primary div__offset" id="News">
      <div class="service card__primary">
        <div class="text__service text__card-primary">
          <p>¿Quieres conocer más sobre el mundo deportivo?</p>
          <h1>Visita estos increíbles diarios deportivos que cubren la información del mundo deportivo a nivel internacional</h1>
        </div>
        <div class="container__card-service container__box-cardPrimary">
          {#each diarios as diario}
            <div class="card__service box__card-primary">
              <img src={diario.logo} alt={diario.name}>
              <h2>{diario.name}</h2>
              <a href={diario.url}>
                <p>Es un periódico deportivo español, Se caracteriza por su amplia cobertura del fútbol, tanto nacional como internacional.</p>
              </a>
              <a href={diario.url}><i class="fa-solid fa-arrow-right"></i></a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </main>
  
  <footer>
    <div class="container__footer" id="Contactanos">
      <div class="box__footer">
        <div class="logo">
          <img src={LogoPagina} alt="Logo">
        </div>
        <div class="terms">
          <p>En SS somos un equipo de apasionados por el deporte que creemos en el poder que este tiene para unir a las personas y crear momentos inolvidables.</p>
        </div>
      </div>
      <div class="box__footer">
        <h2>Deportes</h2>
        <a href="https://www.espn.com.co/futbol/">Futbol</a>
        <a href="https://www.fia.com/es/la-fia">Formula 1</a>
        <a href="https://www.nba.com/">Basquetbol</a>
        <a href="https://www.google.com/search?q=Tenis+deporte">Tenis</a>
      </div>
      <div class="box__footer" data-sveltekit-preload-data="tap">
        <h2>Compañia</h2>
        <a href="/">Acerca de</a>
        <a href="/">Trabajos</a>
        <a href="/">Procesos</a>
        <a href="/">Servicios</a>
      </div>
      <div class="box__footer" data-sveltekit-preload-data="tap" >
        <h2>Redes Sociales</h2>
        <a href="/"><i class="fab fa-facebook-square"></i>Facebook</a>
        <a href="/"><i class="fa-brands fa-tiktok"></i> Tik Tok</a>
        <a href="/"><i class="fab fa-instagram-square"></i> Instagram</a>
      </div>
    </div>
    <div class="box__copyright">
      <hr>
      <p>Todos los derechos reservados © 2024 <b>Sport Scores</b></p>
    </div>
  </footer>
  
  <style>
    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
    :global(*) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      font-family: 'Poppins', sans-serif;
    }
  
    :global(:root) {
      --color_text-primary: #c7c8c9;
      --color_text-secundary: #080606;
      --color_text-tertiary: #080606;
      --main_color-primary: #080606;
      --main_color-secundary: #b60f1d;
      --background-color: #FAFBFE;
      --lowText_font_size: 16px;
      --text_size_title: 40px;
      --text_title_card: 24px;
      --text_title_cardv2: 20px;
      --text_paragraph: 18px;
      --box_shadow-primary: 0px 6px 50px -20px rgba(0,0,0,0.2);
      --bgColor: rgb(255, 252, 241);
    }
  
    #slider {
      position: relative;
      width: 50%;
      height: 32vw;
      margin: 80px auto;
      transform-style: preserve-3d;
      perspective: 1400px;
    }
  
    #slider input[type="radio"] {
      position: relative;
      top: 108%;
      left: 50%;
      width: 18px;
      height: 18px;
      margin: 0 15px 0 0;
      transform: translateX(-83px);
      cursor: pointer;
      opacity: 0.4;
    }
  
    #slider input[type="radio"]:nth-child(6) {
      margin-right: 0px;
    }
  
    #slider input[type="radio"]:checked {
      opacity: 1;
    }
  
    #slider label,
    #slider label img {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      border: 3px solid;
      font-size: 70px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 600ms ease;
    }

  </style>