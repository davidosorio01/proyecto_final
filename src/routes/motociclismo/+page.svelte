<script>
    import BotonVolver from '$lib/componentes/BotonVolver.svelte';
    import '$lib/CSS/futbol_card/futbol.css';
    import LogoPagina  from '$lib/IMAGES/LogoPag.jpg';
</script>

<div>
	<div id="loading-screen">
		<div id="loading-spinner"></div>
	</div>

	<header>
		<div class="menu-container">
			<nav>
				<img src={LogoPagina} alt="" class="logo" />
				<div class="lesson">Historia del Motociclismo</div>
				<div class="nav-item" id="nav-item-1">
					<div class="progress-bar" id="progress-bar">
						<div class="rombo" id="rombo-1"><span class="numero">1</span></div>
						<div class="square" id="square-1"><span class="numero-2"></span></div>
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
		<div class="header">
			<h1>Inicios del Motociclismo</h1>
		</div>
		<div class="video-container">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/UdoIyVoHac4?si=jAugAayTmoI5Hed8"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>
	<a
		href="/motociclismo/motociclismo1"
		data-sveltekit-reload=""
		data-sveltekit-preload-data="tap"
	>
		<button class="next svelte-zonnq2">
			<span class="arrow svelte-zonnq2"></span>
		</button>
	</a>
</div>
